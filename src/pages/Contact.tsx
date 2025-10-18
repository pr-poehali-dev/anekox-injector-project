import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contact = () => {
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
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Контакты</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Свяжитесь с нами для получения поддержки или сотрудничества
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                    onClick={() => window.open('https://t.me/akenox_news', '_blank')}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Send" size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Telegram</CardTitle>
                  <CardDescription>
                    Официальный канал новостей
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-medium mb-2">@akenox_news</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Новости, обновления и поддержка
                  </p>
                  <Button className="w-full" variant="default">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Открыть Telegram
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                    onClick={copyDiscordUsername}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageSquare" size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Discord</CardTitle>
                  <CardDescription>
                    Добавить в друзья
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-primary font-medium mb-2">lovly_muslb</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Нажмите, чтобы скопировать никнейм
                  </p>
                  <Button className="w-full" variant="default">
                    <Icon name={copied ? "Check" : "Copy"} size={16} className="mr-2" />
                    {copied ? 'Скопировано!' : 'Скопировать никнейм'}
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-12 p-6 border border-border rounded-lg bg-card/50 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Info" size={24} className="text-primary" />
                Важная информация
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Мы отвечаем на сообщения в течение 24 часов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Для технической поддержки используйте Telegram</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Discord используется для личной связи и сотрудничества</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Мы не запрашиваем пароли и личные данные</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
