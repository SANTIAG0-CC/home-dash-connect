import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Pill } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function Pharmacy() {
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Acetaminofén 500mg",
      category: "Analgésicos",
      price: 8500,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      description: "Caja x 20 tabletas",
      prescription: false
    },
    {
      id: 2,
      name: "Vitamina C 1000mg",
      category: "Vitaminas",
      price: 15000,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      description: "Frasco x 60 cápsulas",
      prescription: false
    },
    {
      id: 3,
      name: "Ibuprofeno 400mg",
      category: "Antiinflamatorios",
      price: 12000,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
      description: "Caja x 24 tabletas",
      prescription: false
    },
    {
      id: 4,
      name: "Protector Solar FPS 50",
      category: "Cuidado Personal",
      price: 25000,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      description: "Tubo x 120ml",
      prescription: false
    },
    {
      id: 5,
      name: "Suero Fisiológico",
      category: "Primeros Auxilios",
      price: 3500,
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=300&fit=crop",
      description: "Ampolla x 10ml",
      prescription: false
    },
    {
      id: 6,
      name: "Termómetro Digital",
      category: "Equipos Médicos",
      price: 35000,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
      description: "Medición rápida y precisa",
      prescription: false
    },
    {
      id: 7,
      name: "Alcohol Antiséptico",
      category: "Primeros Auxilios",
      price: 4500,
      image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=300&fit=crop",
      description: "Frasco x 250ml",
      prescription: false
    },
    {
      id: 8,
      name: "Vendas Elásticas",
      category: "Primeros Auxilios",
      price: 6000,
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=300&fit=crop",
      description: "Pack x 3 unidades",
      prescription: false
    },
    {
      id: 9,
      name: "Gotas Oculares",
      category: "Oftalmología",
      price: 18000,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      description: "Frasco x 15ml",
      prescription: false
    },
    {
      id: 10,
      name: "Multivitamínico Nariño",
      category: "Vitaminas",
      price: 22000,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      description: "Elaborado con frutas de la región",
      prescription: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Droguería</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Cuidamos tu salud con productos de calidad y entrega segura
          </p>
        </div>

        <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center gap-2 text-accent mb-2">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Importante</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Para medicamentos con prescripción médica, deberás subir la fórmula médica durante el proceso de compra. 
            Todos nuestros productos son originales y están debidamente registrados ante el INVIMA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Pill className="h-3 w-3" />
                  {product.category}
                </div>
                {product.prescription && (
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Prescripción
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    {new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0
                    }).format(product.price)}
                  </span>
                </div>
                <Button 
                  variant="gradient" 
                  className="w-full"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category
                    });
                    toast({
                      title: "Producto agregado",
                      description: `${product.name} se agregó al carrito`,
                    });
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}