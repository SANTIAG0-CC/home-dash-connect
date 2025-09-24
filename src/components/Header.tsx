import { ThemeToggle } from "./ThemeToggle";
import { Cart } from "./Cart";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-xl font-bold"
          >
            🚀 DeliveryApp
          </Button>
          {location.pathname !== "/" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Inicio
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Cart />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}