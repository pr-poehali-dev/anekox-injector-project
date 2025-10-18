import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              🚀 Новое поколение инжекторов
            </Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              ANEKOX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Мощный и надежный инжектор для Roblox с безупречной стабильностью работы
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Icon name="Download" className="mr-2" size={24} />
                Скачать ANEKOX
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="PlayCircle" className="mr-2" size={24} />
                Смотреть видео
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Zap" size={20} className="text-primary" />
                <span>Быстро</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-primary" />
                <span>Надежно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему ANEKOX?</h2>
            <p className="text-xl text-muted-foreground">Три ключевых преимущества</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Activity" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Надежная работа</h3>
              <p className="text-muted-foreground">
                Стабильность без сбоев и зависаний во время игры
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Lock" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Безопасность</h3>
              <p className="text-muted-foreground">
                Защита от обнаружения и блокировок аккаунта
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Rocket" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Скорость</h3>
              <p className="text-muted-foreground">
                Мгновенная инъекция и быстрая работа скриптов
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/features">
              <Button size="lg" variant="outline">
                Все возможности
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к нашему сообществу и получайте поддержку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-[#5865F2] hover:bg-[#4752C4]">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Discord
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-[#0088cc] hover:bg-[#006699]">
              <Icon name="Send" className="mr-2" size={24} />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
