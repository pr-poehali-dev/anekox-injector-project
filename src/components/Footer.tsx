import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="font-bold">ANEKOX</span>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            © 2024 ANEKOX by Acustic. Все права защищены.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия
            </button>
            <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
