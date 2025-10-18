import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Instructions = () => {
  const steps = [
    {
      step: '01',
      title: 'Скачайте и установите',
      description: 'Загрузите ANEKOX с официального сайта и запустите установщик. Следуйте инструкциям на экране. Установка займет не более минуты.'
    },
    {
      step: '02',
      title: 'Запустите Roblox',
      description: 'Откройте игру Roblox и дождитесь полной загрузки игрового мира. Убедитесь, что игра работает стабильно перед следующим шагом.'
    },
    {
      step: '03',
      title: 'Активируйте инжектор',
      description: 'Запустите ANEKOX и нажмите кнопку "Inject". Дождитесь сообщения об успешной инъекции. Готово к использованию!'
    },
    {
      step: '04',
      title: 'Загрузите скрипт',
      description: 'Выберите нужный скрипт из библиотеки или вставьте свой код в редактор. Нажмите "Execute" для запуска.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Инструкция</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните работу с ANEKOX за 4 простых шага
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((instruction, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-border bg-card"
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-primary/20 min-w-[80px]">
                      {instruction.step}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3">{instruction.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {instruction.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <div className="p-6 bg-muted/30 rounded-xl border border-border">
              <h3 className="text-2xl font-bold mb-3">Нужна помощь?</h3>
              <p className="text-muted-foreground mb-6">
                Если у вас возникли вопросы, обратитесь в нашу поддержку
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4]">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Discord поддержка
                </Button>
                <Button size="lg" className="bg-[#0088cc] hover:bg-[#006699]">
                  <Icon name="Send" className="mr-2" size={20} />
                  Telegram поддержка
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructions;
