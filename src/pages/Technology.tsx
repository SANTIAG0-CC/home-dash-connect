import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

export default function Technology() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "$4,200,000",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      description: "Lo último en tecnología móvil"
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: "$5,800,000",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
      description: "Potencia y portabilidad perfectas"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "$950,000",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
      description: "Audio premium con cancelación de ruido"
    },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      price: "$3,800,000",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      description: "Innovación en cada detalle"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Productos Tecnológicos</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Descubre la última tecnología con entrega rápida a domicilio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
                <Button variant="gradient" className="w-full">
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