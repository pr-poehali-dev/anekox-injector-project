import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Developer = () => {
  const [copied, setCopied] = useState(false);

  const copyDiscordUsername = () => {
    navigator.clipboard.writeText('lovly_muslb');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">О проекте</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              История создания ANEKOX и его разработчик
            </p>
          </div>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow mb-12">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src="https://cdn.poehali.dev/files/f038283a-b710-4ed4-8c0e-ad03975593f1.jpg" 
                  alt="Acustic"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="text-center md:text-left flex-1">
                  <CardTitle className="text-3xl mb-2">Acustic</CardTitle>
                  <CardDescription className="text-lg mb-4">Создатель ANEKOX</CardDescription>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button 
                      onClick={copyDiscordUsername}
                      className="bg-[#5865F2] hover:bg-[#4752C4]"
                    >
                      <Icon name={copied ? "Check" : "MessageCircle"} className="mr-2" size={20} />
                      {copied ? 'Скопировано!' : 'Discord'}
                    </Button>
                    <Button 
                      onClick={() => window.open('https://t.me/akenox_news', '_blank')}
                      className="bg-[#0088cc] hover:bg-[#006699]"
                    >
                      <Icon name="Send" className="mr-2" size={20} />
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">О проекте ANEKOX</CardTitle>
                <CardContent className="px-0 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ANEKOX — это результат многолетней работы и постоянного совершенствования. 
                    Проект был создан с одной целью: предоставить игрокам Roblox самый надежный 
                    и безопасный инструмент для расширения игровых возможностей.
                  </p>
                  <p>
                    Главное преимущество ANEKOX — это абсолютная стабильность работы. 
                    Мы потратили сотни часов на тестирование и оптимизацию, чтобы исключить 
                    любые сбои и зависания. Каждое обновление проходит тщательную проверку 
                    перед релизом.
                  </p>
                  <p>
                    Проект активно развивается и регулярно обновляется. Мы внимательно 
                    слушаем отзывы пользователей и добавляем новые функции, которые делают 
                    работу с инжектором еще удобнее и безопаснее.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">О разработчике</CardTitle>
                <CardContent className="px-0 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Я — Acustic, независимый разработчик, увлеченный созданием качественных 
                    инструментов для игрового сообщества. Начал работу над ANEKOX, потому что 
                    хотел сделать инжектор, которому можно доверять.
                  </p>
                  <p>
                    Моя философия проста: надежность и простота использования должны быть 
                    на первом месте. Каждая функция ANEKOX разработана с учетом реальных 
                    потребностей пользователей.
                  </p>
                  <p>
                    Я всегда открыт для общения и рад помочь каждому пользователю. 
                    Свяжитесь со мной через Discord или Telegram, если у вас есть вопросы 
                    или предложения по улучшению проекта!
                  </p>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className="border-border bg-muted/30">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Технические детали</CardTitle>
                <CardContent className="px-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Code" size={20} className="text-primary" />
                        Технологии
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Современный стек разработки с упором на производительность
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Shield" size={20} className="text-primary" />
                        Безопасность
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Продвинутые методы защиты от обнаружения
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Zap" size={20} className="text-primary" />
                        Производительность
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Оптимизирован для минимального потребления ресурсов
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Heart" size={20} className="text-primary" />
                        Поддержка
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Активное сообщество и быстрая техподдержка
                      </p>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developer;