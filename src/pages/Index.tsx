import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <span className="text-2xl font-bold glow-text">ANEKOX</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">Возможности</button>
              <button onClick={() => scrollToSection('instructions')} className="text-sm hover:text-primary transition-colors">Инструкция</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('developer')} className="text-sm hover:text-primary transition-colors">Разработчик</button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="px-4 py-2 text-sm bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              🚀 Новое поколение инжекторов
            </Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold glow-text leading-tight">
              ANEKOX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Мощный и надежный инжектор для Roblox с безупречной стабильностью работы
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="Download" className="mr-2" size={24} />
                Скачать ANEKOX
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
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
                <Icon name="Zap" size={20} className="text-secondary" />
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

      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности</h2>
            <p className="text-xl text-muted-foreground">Всё что нужно для комфортной игры</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Activity',
                title: 'Надежная работа',
                description: 'Стабильность без сбоев и зависаний во время игры'
              },
              {
                icon: 'Lock',
                title: 'Безопасность',
                description: 'Защита от обнаружения и блокировок аккаунта'
              },
              {
                icon: 'Rocket',
                title: 'Высокая скорость',
                description: 'Мгновенная инъекция и быстрая работа скриптов'
              },
              {
                icon: 'Code',
                title: 'Поддержка скриптов',
                description: 'Совместимость с популярными скриптами Roblox'
              },
              {
                icon: 'Settings',
                title: 'Простая настройка',
                description: 'Интуитивный интерфейс и легкая установка'
              },
              {
                icon: 'Sparkles',
                title: 'Регулярные обновления',
                description: 'Постоянная поддержка и новые функции'
              }
            ].map((feature, index) => (
              <Card key={index} className="glow-card hover:scale-105 transition-transform duration-300 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructions" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Инструкция</h2>
            <p className="text-xl text-muted-foreground">Начните работу за 3 простых шага</p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Скачайте и установите',
                description: 'Загрузите ANEKOX и запустите установщик. Следуйте инструкциям на экране.'
              },
              {
                step: '02',
                title: 'Запустите Roblox',
                description: 'Откройте игру Roblox и дождитесь полной загрузки игрового мира.'
              },
              {
                step: '03',
                title: 'Активируйте инжектор',
                description: 'Запустите ANEKOX и нажмите кнопку "Inject". Готово к использованию!'
              }
            ].map((instruction, index) => (
              <Card key={index} className="gradient-border hover:glow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-primary/30">{instruction.step}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{instruction.title}</CardTitle>
                      <CardDescription className="text-base">{instruction.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-xl text-muted-foreground">Часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Безопасен ли ANEKOX для моего аккаунта?',
                answer: 'Да, ANEKOX использует современные методы защиты от обнаружения. Однако, как и с любым инжектором, мы рекомендуем использовать его на свой страх и риск.'
              },
              {
                question: 'Работает ли на Windows 11?',
                answer: 'ANEKOX полностью совместим с Windows 10 и Windows 11. Поддержка обеих версий операционной системы.'
              },
              {
                question: 'Как часто выходят обновления?',
                answer: 'Мы регулярно выпускаем обновления для улучшения стабильности и добавления новых функций. Обновления выходят автоматически при запуске.'
              },
              {
                question: 'Нужен ли антивирус?',
                answer: 'Рекомендуется добавить ANEKOX в исключения антивируса, так как некоторые антивирусы могут ложно определять инжекторы как угрозу.'
              },
              {
                question: 'Есть ли техподдержка?',
                answer: 'Да! Вы можете связаться с нами через Discord или Telegram. Наша команда поддержки всегда готова помочь.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="developer" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Разработчик</h2>
            <p className="text-xl text-muted-foreground">Создатель ANEKOX</p>
          </div>
          <Card className="glow-card border-border/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-bold">
                  A
                </div>
                <div className="text-center md:text-left flex-1">
                  <CardTitle className="text-3xl mb-2">Acustic</CardTitle>
                  <CardDescription className="text-lg mb-4">Главный разработчик ANEKOX</CardDescription>
                  <p className="text-muted-foreground mb-6">
                    Опытный разработчик с многолетним стажем в создании инструментов для Roblox. 
                    Фокусируется на надежности, безопасности и удобстве использования.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Discord
                    </Button>
                    <Button variant="outline" className="border-secondary/50 hover:bg-secondary/10">
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="support" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Нужна поддержка?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к нашему сообществу и получайте помощь от команды и других пользователей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-[#5865F2] hover:bg-[#4752C4]">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Присоединиться к Discord
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-[#0088cc] hover:bg-[#006699]">
              <Icon name="Send" className="mr-2" size={24} />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="font-bold">ANEKOX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ANEKOX by Acustic. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-sm hover:text-primary transition-colors">Политика</button>
              <button className="text-sm hover:text-primary transition-colors">Условия</button>
              <button className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
