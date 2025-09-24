import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Clock } from "lucide-react";
import { useCartContext } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function Food() {
  const { addToCart } = useCartContext();
  const { toast } = useToast();

  const restaurants = [
    {
      id: 1,
      name: "Burger Master",
      cuisine: "Hamburguesas",
      rating: 4.8,
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      featured: "Hamburguesa Deluxe",
      price: 18000
    },
    {
      id: 2,
      name: "Pizza Express",
      cuisine: "Pizza Italiana",
      rating: 4.7,
      deliveryTime: "30-40 min",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop",
      featured: "Pizza Margherita",
      price: 25000
    },
    {
      id: 3,
      name: "Sushi Zen",
      cuisine: "Comida Japonesa",
      rating: 4.9,
      deliveryTime: "35-45 min",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop",
      featured: "Combo Sushi",
      price: 35000
    },
    {
      id: 4,
      name: "Taco Loco",
      cuisine: "Comida Mexicana",
      rating: 4.6,
      deliveryTime: "20-30 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      featured: "Tacos Especiales",
      price: 15000
    },
    {
      id: 5,
      name: "Pasta & Co",
      cuisine: "Comida Italiana",
      rating: 4.7,
      deliveryTime: "25-35 min",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
      featured: "Pasta Carbonara",
      price: 22000
    },
    {
      id: 6,
      name: "Healthy Bowl",
      cuisine: "Comida Saludable",
      rating: 4.8,
      deliveryTime: "15-25 min",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
      featured: "Bowl de Quinoa",
      price: 20000
    },
    {
      id: 7,
      name: "Asadero Pastuso",
      cuisine: "Parrilla Nariñense",
      rating: 4.9,
      deliveryTime: "40-50 min",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      featured: "Churrasco de Res",
      price: 32000
    },
    {
      id: 8,
      name: "Empanadas de Pasto",
      cuisine: "Comida Regional",
      rating: 4.7,
      deliveryTime: "15-25 min",
      image: "https://images.unsplash.com/photo-1625398407796-82c281d88851?w=300&h=200&fit=crop",
      featured: "Empanadas de Pipián",
      price: 8000
    },
    {
      id: 9,
      name: "Cuy Asado Nariño",
      cuisine: "Comida Típica",
      rating: 4.8,
      deliveryTime: "45-60 min",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop",
      featured: "Cuy Asado Tradicional",
      price: 45000
    },
    {
      id: 10,
      name: "Café y Postres Galeras",
      cuisine: "Postres y Café",
      rating: 4.6,
      deliveryTime: "10-20 min",
      image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?w=300&h=200&fit=crop",
      featured: "Tres Leches Pastusa",
      price: 12000
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Comidas</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Los mejores restaurantes con entrega rápida y deliciosa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card key={restaurant.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {restaurant.deliveryTime}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium">{restaurant.featured}</span>
                  <span className="text-lg font-bold text-primary">
                    {new Intl.NumberFormat('es-CO', {
                      style: 'currency',
                      currency: 'COP',
                      minimumFractionDigits: 0
                    }).format(restaurant.price)}
                  </span>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => {
                    addToCart({
                      id: restaurant.id,
                      name: restaurant.featured,
                      price: restaurant.price,
                      image: restaurant.image,
                      category: restaurant.cuisine
                    });
                    toast({
                      title: "Producto agregado",
                      description: `${restaurant.featured} se agregó al carrito`,
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