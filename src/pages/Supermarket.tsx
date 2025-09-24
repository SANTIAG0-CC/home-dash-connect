import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Supermarket() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const products = [
    {
      id: 1,
      name: "Leche Entera",
      category: "Lácteos",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
      unit: "1L"
    },
    {
      id: 2,
      name: "Pan Integral",
      category: "Panadería",
      price: "$6,800",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 3,
      name: "Manzanas Rojas",
      category: "Frutas",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 4,
      name: "Pollo Entero",
      category: "Carnes",
      price: "$12,000",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=300&h=300&fit=crop",
      unit: "1.5kg aprox"
    },
    {
      id: 5,
      name: "Arroz Blanco",
      category: "Granos",
      price: "$3,800",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 6,
      name: "Huevos",
      category: "Lácteos",
      price: "$8,500",
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop",
      unit: "30 unidades"
    }
  ];

  const updateQuantity = (id: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change)
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Supermercado</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Todo lo que necesitas para tu hogar, fresco y directo a tu puerta
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
                <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.unit}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                </div>
                
                {quantities[product.id] > 0 ? (
                  <div className="flex items-center justify-between mb-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold text-lg">{quantities[product.id]}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : null}
                
                <Button
                  variant={quantities[product.id] > 0 ? "secondary" : "gradient"}
                  className="w-full"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {quantities[product.id] > 0 ? "Agregar más" : "Agregar al carrito"}
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