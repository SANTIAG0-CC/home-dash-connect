import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export function CategoryCard({ title, description, image, onClick }: CategoryCardProps) {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button
          onClick={onClick}
          variant="category"
          className="w-full group"
        >
          Explorar {title}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}