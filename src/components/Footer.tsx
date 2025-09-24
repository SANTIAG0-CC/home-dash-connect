export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">🚀 DeliveryApp</h3>
            <p className="text-muted-foreground">
              Tu plataforma de delivery favorita. Entregamos lo que necesitas, 
              cuando lo necesitas.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Productos Tecnológicos</li>
              <li>Comidas</li>
              <li>Supermercado</li>
              <li>Droguería</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>📞 +57 300 123 4567</li>
              <li>📧 contacto@deliveryapp.com</li>
              <li>📍 Bogotá, Colombia</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>
            Desarrollado por: <span className="font-semibold text-primary">Santiago Ceballos</span>
            <br />
            Estudiante de Ingeniería de Software - 1er Semestre
            <br />
            © 2024 DeliveryApp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}