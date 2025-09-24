import { useState } from "react";
import { CreditCard, Smartphone, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onPaymentComplete: () => void;
}

export function PaymentModal({ isOpen, onClose, total, onPaymentComplete }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const paymentMethods = [
    {
      id: "nequi",
      name: "Nequi",
      icon: Smartphone,
      description: "Pago con tu celular"
    },
    {
      id: "bancolombia",
      name: "Bancolombia",
      icon: Building2,
      description: "Transferencia bancaria"
    },
    {
      id: "card",
      name: "Tarjeta",
      icon: CreditCard,
      description: "Crédito o débito"
    }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      toast({
        title: "Error",
        description: "Por favor selecciona un método de pago",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentComplete();
      onClose();
      toast({
        title: "¡Pago exitoso!",
        description: "Tu pedido ha sido confirmado y está en camino",
      });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Método de Pago</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-lg font-bold">Total a pagar</p>
            <p className="text-2xl font-bold text-primary">{formatPrice(total)}</p>
          </div>

          <div className="space-y-3">
            <Label>Selecciona tu método de pago:</Label>
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card
                  key={method.id}
                  className={`p-4 cursor-pointer transition-all duration-200 ${
                    selectedMethod === method.id
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">{method.name}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {selectedMethod === "card" && (
            <div className="space-y-3 p-4 border rounded-lg">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="cardNumber">Número de tarjeta</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="expiry">Vencimiento</Label>
                  <Input id="expiry" placeholder="MM/AA" />
                </div>
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Nombre completo" />
                </div>
              </div>
            </div>
          )}

          {selectedMethod === "nequi" && (
            <div className="space-y-3 p-4 border rounded-lg">
              <div>
                <Label htmlFor="phone">Número de celular</Label>
                <Input id="phone" placeholder="300 123 4567" />
              </div>
            </div>
          )}

          {selectedMethod === "bancolombia" && (
            <div className="space-y-3 p-4 border rounded-lg">
              <div>
                <Label htmlFor="account">Número de cuenta</Label>
                <Input id="account" placeholder="12345678901" />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              onClick={handlePayment} 
              disabled={isProcessing}
              className="flex-1"
              variant="gradient"
            >
              {isProcessing ? "Procesando..." : "Pagar"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}