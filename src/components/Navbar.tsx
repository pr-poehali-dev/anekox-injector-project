import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/features', label: 'Возможности' },
    { path: '/instructions', label: 'Инструкция' },
    { path: '/faq', label: 'FAQ' },
    { path: '/developer', label: 'О проекте' }
  ];

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
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm transition-colors ${isActive(link.path) ? 'text-primary font-medium' : 'text-foreground/80 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-accent hidden sm:flex">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent hidden sm:flex">
              <Icon name="Send" size={20} />
            </Button>
            <ThemeToggle />
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-foreground">A</span>
                    </div>
                    <span className="text-xl font-bold">ANEKOX</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg py-2 px-4 rounded-lg transition-colors ${
                        isActive(link.path) 
                          ? 'bg-primary text-primary-foreground font-medium' 
                          : 'hover:bg-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-border my-4" />
                  <div className="space-y-3">
                    <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Discord
                    </Button>
                    <Button className="w-full bg-[#0088cc] hover:bg-[#006699]">
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
