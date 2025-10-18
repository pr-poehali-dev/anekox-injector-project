import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Политика конфиденциальности</h1>
            <p className="text-muted-foreground mb-8">Последнее обновление: 18 октября 2025</p>
          </ScrollReveal>

          <div className="prose prose-invert max-w-none">
            <ScrollReveal delay={100}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground mb-4">
                  Настоящая Политика конфиденциальности описывает, как ANEKOX собирает, использует и защищает 
                  информацию пользователей нашего программного обеспечения.
                </p>
                <p className="text-muted-foreground">
                  Используя ANEKOX, вы соглашаетесь с условиями данной Политики конфиденциальности.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Сбор информации</h2>
                <p className="text-muted-foreground mb-4">
                  ANEKOX не собирает и не хранит личные данные пользователей. Мы не отслеживаем вашу активность 
                  и не передаем информацию третьим лицам.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Мы не собираем имена, адреса электронной почты или другие контактные данные</li>
                  <li>Мы не отслеживаем использование программы</li>
                  <li>Мы не используем файлы cookie или аналитические инструменты</li>
                  <li>Мы не продаем и не передаем данные третьим лицам</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Безопасность</h2>
                <p className="text-muted-foreground mb-4">
                  ANEKOX разработан с учетом безопасности пользователей. Мы применяем современные методы защиты 
                  для обеспечения безопасной работы программы.
                </p>
                <p className="text-muted-foreground">
                  Весь исходный код проходит проверку на отсутствие вредоносных компонентов.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Использование программы</h2>
                <p className="text-muted-foreground mb-4">
                  Пользователь несет полную ответственность за использование ANEKOX. Мы рекомендуем:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Использовать программу только в образовательных целях</li>
                  <li>Соблюдать правила и условия использования Roblox</li>
                  <li>Не использовать программу для получения несправедливого преимущества</li>
                  <li>Уважать других игроков и разработчиков</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Изменения в политике</h2>
                <p className="text-muted-foreground mb-4">
                  Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. 
                  Все изменения будут опубликованы на этой странице.
                </p>
                <p className="text-muted-foreground">
                  Рекомендуем периодически проверять эту страницу для ознакомления с возможными изменениями.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. Контактная информация</h2>
                <p className="text-muted-foreground">
                  Если у вас есть вопросы относительно Политики конфиденциальности, свяжитесь с нами 
                  через Telegram: <a href="https://t.me/akenox_news" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@akenox_news</a>
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
