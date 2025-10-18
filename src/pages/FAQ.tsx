import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: 'Безопасен ли ANEKOX для моего аккаунта?',
      answer: 'Да, ANEKOX использует современные методы защиты от обнаружения. Однако, как и с любым инжектором, мы рекомендуем использовать его на свой страх и риск. Всегда следуйте правилам игры.'
    },
    {
      question: 'Работает ли на Windows 11?',
      answer: 'ANEKOX полностью совместим с Windows 10 и Windows 11. Поддержка обеих версий операционной системы обеспечена последними обновлениями.'
    },
    {
      question: 'Как часто выходят обновления?',
      answer: 'Мы регулярно выпускаем обновления для улучшения стабильности и добавления новых функций. Обновления выходят автоматически при запуске инжектора.'
    },
    {
      question: 'Нужно ли отключать антивирус?',
      answer: 'Рекомендуется добавить ANEKOX в исключения антивируса, так как некоторые антивирусы могут ложно определять инжекторы как угрозу. Наш продукт не содержит вредоносного кода.'
    },
    {
      question: 'Есть ли техподдержка?',
      answer: 'Да! Вы можете связаться с нами через Discord или Telegram. Наша команда поддержки всегда готова помочь с любыми вопросами.'
    },
    {
      question: 'Какие скрипты поддерживаются?',
      answer: 'ANEKOX поддерживает практически все Lua-скрипты для Roblox. Встроенная библиотека содержит проверенные и безопасные скрипты.'
    },
    {
      question: 'Можно ли использовать на нескольких компьютерах?',
      answer: 'Да, вы можете устанавливать ANEKOX на любое количество своих устройств. Ограничений по установкам нет.'
    },
    {
      question: 'Что делать если не работает инъекция?',
      answer: 'Убедитесь, что Roblox полностью загружен. Попробуйте перезапустить ANEKOX с правами администратора. Если проблема сохраняется, обратитесь в поддержку.'
    },
    {
      question: 'Есть ли мобильная версия?',
      answer: 'На данный момент ANEKOX доступен только для Windows. Работа над поддержкой других платформ ведется.'
    },
    {
      question: 'Можно ли запускать несколько скриптов одновременно?',
      answer: 'Да, ANEKOX поддерживает мультискрипт режим. Вы можете запускать несколько скриптов одновременно без конфликтов.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на часто задаваемые вопросы о ANEKOX
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-3">Не нашли ответ?</h3>
            <p className="text-muted-foreground mb-6">
              Задайте свой вопрос в нашем сообществе или напишите в поддержку
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-medium transition-colors">
                Задать вопрос в Discord
              </button>
              <button className="px-6 py-3 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg font-medium transition-colors">
                Написать в Telegram
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
