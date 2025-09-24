import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function Supermarket() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Leche Entera",
      category: "Lácteos",
      price: 4500,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
      unit: "1L"
    },
    {
      id: 2,
      name: "Pan Integral",
      category: "Panadería",
      price: 6800,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 3,
      name: "Manzanas Rojas de Pasto",
      category: "Frutas",
      price: 3200,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 4,
      name: "Pollo Campesino",
      category: "Carnes",
      price: 12000,
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=300&h=300&fit=crop",
      unit: "1.5kg aprox"
    },
    {
      id: 5,
      name: "Arroz Blanco Premium",
      category: "Granos",
      price: 3800,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 6,
      name: "Huevos Criollos",
      category: "Lácteos",
      price: 8500,
      image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop",
      unit: "30 unidades"
    },
    {
      id: 7,
      name: "Café Nariño Premium",
      category: "Bebidas",
      price: 25000,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 8,
      name: "Papas Criollas de Pasto",
      category: "Verduras",
      price: 2800,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
      unit: "1kg"
    },
    {
      id: 9,
      name: "Cilantro Pastuso",
      category: "Hierbas",
      price: 1500,
      image: "https://images.unsplash.com/photo-1629631263164-b1c29f551f14?w=300&h=300&fit=crop",
      unit: "Mazo"
    },
    {
      id: 10,
      name: "Queso Nariñense",
      category: "Lácteos",
      price: 15000,
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop",
      unit: "500g"
    },
    {
      id: 11,
      name: "Cebolla Larga de Pasto",
      category: "Verduras",
      price: 2200,
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
      unit: "Mazo"
    },
    {
      id: 12,
      name: "Frijol Nariñense",
      category: "Granos",
      price: 4200,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop",
      unit: "500g"
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
                  <span className="text-lg font-bold text-primary">
                    {new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0
                    }).format(product.price)}
                  </span>
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
                  onClick={() => {
                    updateQuantity(product.id, 1);
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                      unit: product.unit
                    });
                    toast({
                      title: "Producto agregado",
                      description: `${product.name} se agregó al carrito`,
                    });
                  }}
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