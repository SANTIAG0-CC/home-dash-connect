import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", content: "¡Hola! Soy tu asistente de delivery. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: "user", content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Simple chatbot responses
    setTimeout(() => {
      let botResponse = "";
      const input = inputValue.toLowerCase();
      
      if (input.includes("comida") || input.includes("comidas")) {
        botResponse = "Te recomiendo revisar nuestra sección de Comidas donde encontrarás restaurantes y platos deliciosos. ¿Te ayudo con algún tipo de comida específica?";
      } else if (input.includes("tecnología") || input.includes("tecnológicos")) {
        botResponse = "En nuestra sección de Tecnología tenemos los últimos dispositivos electrónicos. ¿Buscas algo específico como celulares, laptops o accesorios?";
      } else if (input.includes("supermercado") || input.includes("mercado")) {
        botResponse = "En el Supermercado encontrarás todo lo que necesitas para tu hogar. ¿Buscas productos frescos, despensa o algo específico?";
      } else if (input.includes("droguería") || input.includes("farmacia")) {
        botResponse = "En nuestra Droguería tenemos medicamentos y productos de cuidado personal. ¿Necesitas algo específico?";
      } else {
        botResponse = "Puedo ayudarte a encontrar productos en nuestras categorías: Comidas, Tecnología, Supermercado y Droguería. ¿Qué te interesa?";
      }
      
      setMessages(prev => [...prev, { type: "bot", content: botResponse }]);
    }, 1000);

    setInputValue("");
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-hover animate-float z-50 ${isOpen ? 'hidden' : ''}`}
        variant="gradient"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 flex flex-col z-50 shadow-hover animate-scale-in">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-sm">Asistente de Delivery</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}