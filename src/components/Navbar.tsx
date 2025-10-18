import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-2xl font-bold">ANEKOX</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
            >
              Главная
            </Link>
            <Link 
              to="/features" 
              className={`text-sm transition-colors ${isActive('/features') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
            >
              Возможности
            </Link>
            <Link 
              to="/instructions" 
              className={`text-sm transition-colors ${isActive('/instructions') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
            >
              Инструкция
            </Link>
            <Link 
              to="/faq" 
              className={`text-sm transition-colors ${isActive('/faq') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
            >
              FAQ
            </Link>
            <Link 
              to="/developer" 
              className={`text-sm transition-colors ${isActive('/developer') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
            >
              О проекте
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Icon name="Send" size={20} />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
