import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { ScrollReveal } from '@/components/ScrollReveal';

export function UserReviews() {
  const reviews = [
    {
      name: 'Дмитрий К.',
      avatar: 'ДК',
      rating: 5,
      date: '10 января 2025',
      text: 'Лучший инжектор, который я пробовал! Работает стабильно, без вылетов. Интерфейс простой и понятный. Рекомендую всем!'
    },
    {
      name: 'Александр М.',
      avatar: 'АМ',
      rating: 5,
      date: '5 января 2025',
      text: 'Пользуюсь уже 3 месяца, ни одного бана. Скорость инъекции впечатляет, скрипты запускаются моментально. Отличная работа разработчиков!'
    },
    {
      name: 'Игорь В.',
      avatar: 'ИВ',
      rating: 5,
      date: '28 декабря 2024',
      text: 'Попробовал много инжекторов, остановился на ANEKOX. Главное преимущество - надежность. Ни разу не подвел за всё время использования.'
    },
    {
      name: 'Максим С.',
      avatar: 'МС',
      rating: 4,
      date: '20 декабря 2024',
      text: 'Отличный продукт! Единственное пожелание - добавить больше тем оформления. В остальном всё идеально.'
    },
    {
      name: 'Артём Л.',
      avatar: 'АЛ',
      rating: 5,
      date: '15 декабря 2024',
      text: 'Самый стабильный инжектор на рынке. Поддержка отвечает быстро, помогают с любыми вопросами. Спасибо за качественный продукт!'
    },
    {
      name: 'Никита П.',
      avatar: 'НП',
      rating: 5,
      date: '8 декабря 2024',
      text: 'Простая установка, удобный интерфейс, отличная производительность. ANEKOX - это именно то, что нужно для комфортной игры.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы пользователей</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 bg-primary/10">
                        <AvatarFallback className="text-primary font-semibold">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-12 text-center p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Icon name="Star" size={24} className="text-yellow-500 fill-yellow-500" />
              <span className="text-3xl font-bold">4.9</span>
              <span className="text-muted-foreground">из 5</span>
            </div>
            <p className="text-muted-foreground mb-4">
              На основе более чем 1,200 отзывов
            </p>
            <p className="text-sm text-muted-foreground">
              Оставьте свой отзыв в нашем Discord или Telegram сообществе
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
