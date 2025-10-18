import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Условия использования</h1>
            <p className="text-muted-foreground mb-8">Последнее обновление: 18 октября 2025</p>
          </ScrollReveal>

          <div className="prose prose-invert max-w-none">
            <ScrollReveal delay={100}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Принятие условий</h2>
                <p className="text-muted-foreground mb-4">
                  Используя ANEKOX, вы соглашаетесь соблюдать настоящие Условия использования. 
                  Если вы не согласны с какой-либо частью этих условий, не используйте программу.
                </p>
                <p className="text-muted-foreground">
                  Мы оставляем за собой право изменять эти условия в любое время без предварительного уведомления.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. Лицензия</h2>
                <p className="text-muted-foreground mb-4">
                  ANEKOX предоставляется бесплатно для личного некоммерческого использования.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Вы можете использовать программу на своих устройствах</li>
                  <li>Запрещено распространение модифицированных версий программы</li>
                  <li>Запрещена продажа или коммерческое использование ANEKOX</li>
                  <li>Запрещен реверс-инжиниринг и декомпиляция программы</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Ограничения и запреты</h2>
                <p className="text-muted-foreground mb-4">
                  При использовании ANEKOX вы обязуетесь:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Не использовать программу для нарушения правил Roblox</li>
                  <li>Не использовать программу для получения несправедливого преимущества</li>
                  <li>Не распространять вредоносные скрипты через ANEKOX</li>
                  <li>Не использовать программу для нанесения вреда другим пользователям</li>
                  <li>Не пытаться обойти системы защиты программы</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. Отказ от ответственности</h2>
                <p className="text-muted-foreground mb-4">
                  ANEKOX предоставляется "как есть" без каких-либо гарантий. Мы не несем ответственности за:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Блокировку аккаунта Roblox в результате использования программы</li>
                  <li>Потерю данных или повреждение системы</li>
                  <li>Действия третьих лиц, использующих ANEKOX</li>
                  <li>Любые прямые или косвенные убытки от использования программы</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Пользователь принимает все риски, связанные с использованием ANEKOX.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Обновления программы</h2>
                <p className="text-muted-foreground mb-4">
                  Мы регулярно выпускаем обновления для улучшения функциональности и безопасности ANEKOX. 
                  Рекомендуем всегда использовать последнюю версию программы.
                </p>
                <p className="text-muted-foreground">
                  Обновления могут изменять функциональность программы. Мы не гарантируем обратную совместимость 
                  со старыми версиями скриптов.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. Прекращение использования</h2>
                <p className="text-muted-foreground mb-4">
                  Мы оставляем за собой право прекратить поддержку ANEKOX в любое время без объяснения причин.
                </p>
                <p className="text-muted-foreground">
                  Вы можете прекратить использование программы в любой момент, удалив её со своего устройства.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">7. Применимое право</h2>
                <p className="text-muted-foreground mb-4">
                  Настоящие Условия использования регулируются законодательством Российской Федерации.
                </p>
                <p className="text-muted-foreground">
                  Все споры разрешаются путем переговоров или в судебном порядке.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">8. Контактная информация</h2>
                <p className="text-muted-foreground">
                  По вопросам, связанным с Условиями использования, обращайтесь в наш Telegram: 
                  <a href="https://t.me/akenox_news" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">@akenox_news</a>
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

export default Terms;
