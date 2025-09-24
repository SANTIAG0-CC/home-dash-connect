import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import category images
import techImage from "@/assets/tech-category.jpg";
import foodImage from "@/assets/food-category.jpg";
import supermarketImage from "@/assets/supermarket-category.jpg";
import pharmacyImage from "@/assets/pharmacy-category.jpg";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Productos Tecnológicos",
      description: "Lo último en tecnología con entrega rápida y segura",
      image: techImage,
      route: "/technology"
    },
    {
      title: "Comidas",
      description: "Los mejores restaurantes y comidas deliciosas",
      image: foodImage,
      route: "/food"
    },
    {
      title: "Supermercado",
      description: "Todo lo que necesitas para tu hogar en un solo lugar",
      image: supermarketImage,
      route: "/supermarket"
    },
    {
      title: "Droguería",
      description: "Medicamentos y productos de salud con garantía",
      image: pharmacyImage,
      route: "/pharmacy"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Recibe tus productos en tiempo récord"
    },
    {
      icon: Clock,
      title: "24/7 Disponible",
      description: "Servicio disponible todos los días"
    },
    {
      icon: Shield,
      title: "Compra Segura",
      description: "Tus datos y pagos están protegidos"
    },
    {
      icon: Star,
      title: "Calidad Garantizada",
      description: "Solo trabajamos con los mejores proveedores"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            🚀 DeliveryApp
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Tu plataforma de delivery favorita. Entregamos lo que necesitas, cuando lo necesitas.
          </p>
          <Button variant="gradient" size="lg" className="animate-scale-in">
            Explorar Categorías
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Categorías</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre todo lo que tenemos para ti en nuestras diferentes secciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.title} style={{animationDelay: `${index * 150}ms`}}>
                <CategoryCard
                  {...category}
                  onClick={() => navigate(category.route)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-lg text-muted-foreground">
              Ofrecemos la mejor experiencia de delivery en Colombia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
