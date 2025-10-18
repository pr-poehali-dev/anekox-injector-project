import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 mb-4">
                Последняя версия 2.5.0
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Скачать ANEKOX</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Загрузите самую стабильную версию инжектора для Roblox
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent mb-12">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl mb-2">ANEKOX v2.5.0</CardTitle>
                <CardDescription className="text-base">
                  Стабильная версия с последними улучшениями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <Button size="lg" className="text-lg px-12 py-6 bg-primary hover:bg-primary/90 w-full md:w-auto">
                    <Icon name="Download" className="mr-2" size={24} />
                    Скачать для Windows
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Размер: 15.3 MB • Дата выхода: 15 октября 2024
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Shield" size={20} className="text-primary" />
                    <span className="text-sm">Безопасно</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Zap" size={20} className="text-primary" />
                    <span className="text-sm">Быстрая установка</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                    <span className="text-sm">Без вирусов</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={200}>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="Laptop" size={32} className="text-primary mb-3" />
                  <CardTitle className="text-2xl">Системные требования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Операционная система</p>
                      <p className="text-sm text-muted-foreground">Windows 10/11 (64-bit)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Процессор</p>
                      <p className="text-sm text-muted-foreground">Intel Core i3 или аналог</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Оперативная память</p>
                      <p className="text-sm text-muted-foreground">4 GB RAM (рекомендуется 8 GB)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Место на диске</p>
                      <p className="text-sm text-muted-foreground">50 MB свободного места</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Дополнительно</p>
                      <p className="text-sm text-muted-foreground">.NET Framework 4.8 или выше</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-border bg-card">
                <CardHeader>
                  <Icon name="AlertCircle" size={32} className="text-primary mb-3" />
                  <CardTitle className="text-2xl">Важная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-sm font-medium mb-1 flex items-center gap-2">
                      <Icon name="Shield" size={16} />
                      Антивирус
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Добавьте ANEKOX в исключения антивируса для корректной работы
                    </p>
                  </div>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm font-medium mb-1 flex items-center gap-2">
                      <Icon name="User" size={16} />
                      Права администратора
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Запускайте ANEKOX от имени администратора
                    </p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm font-medium mb-1 flex items-center gap-2">
                      <Icon name="RefreshCw" size={16} />
                      Автообновление
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Инжектор автоматически обновляется при запуске
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <Card className="border-border bg-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Предыдущие версии</CardTitle>
                <CardDescription>
                  Если у вас возникли проблемы с последней версией
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <Icon name="Package" size={24} className="text-muted-foreground" />
                      <div>
                        <p className="font-medium">ANEKOX v2.4.2</p>
                        <p className="text-sm text-muted-foreground">1 октября 2024 • 14.8 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <Icon name="Package" size={24} className="text-muted-foreground" />
                      <div>
                        <p className="font-medium">ANEKOX v2.4.0</p>
                        <p className="text-sm text-muted-foreground">20 сентября 2024 • 14.5 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
              <Icon name="HelpCircle" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Нужна помощь с установкой?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ознакомьтесь с подробной инструкцией или обратитесь в нашу поддержку
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Инструкция по установке
                </Button>
                <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4]">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с поддержкой
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Download;
