import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  const features = [
    {
      icon: 'Activity',
      title: 'Надежная работа',
      description: 'Стабильность без сбоев и зависаний во время игры. ANEKOX работает плавно и предсказуемо.'
    },
    {
      icon: 'Lock',
      title: 'Безопасность',
      description: 'Защита от обнаружения и блокировок аккаунта благодаря продвинутым методам маскировки.'
    },
    {
      icon: 'Rocket',
      title: 'Высокая скорость',
      description: 'Мгновенная инъекция и быстрая работа скриптов без задержек и лагов.'
    },
    {
      icon: 'Code',
      title: 'Поддержка скриптов',
      description: 'Совместимость с популярными скриптами Roblox и большинством Lua-библиотек.'
    },
    {
      icon: 'Settings',
      title: 'Простая настройка',
      description: 'Интуитивный интерфейс и легкая установка за несколько кликов.'
    },
    {
      icon: 'Sparkles',
      title: 'Регулярные обновления',
      description: 'Постоянная поддержка и новые функции от команды разработчиков.'
    },
    {
      icon: 'Layers',
      title: 'Мультискрипт',
      description: 'Запуск нескольких скриптов одновременно без конфликтов.'
    },
    {
      icon: 'Palette',
      title: 'Настройка интерфейса',
      description: 'Кастомизация внешнего вида под ваши предпочтения.'
    },
    {
      icon: 'Database',
      title: 'Библиотека скриптов',
      description: 'Встроенная коллекция проверенных и безопасных скриптов.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Возможности</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ANEKOX предлагает полный набор инструментов для комфортной игры в Roblox
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
