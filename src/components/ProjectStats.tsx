import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { StatsCounter } from '@/components/StatsCounter';
import { ScrollReveal } from '@/components/ScrollReveal';

export function ProjectStats() {
  const stats = [
    {
      icon: 'Download',
      value: 15420,
      suffix: '+',
      label: 'Загрузок',
      color: 'text-blue-500'
    },
    {
      icon: 'Users',
      value: 8750,
      suffix: '+',
      label: 'Активных пользователей',
      color: 'text-green-500'
    },
    {
      icon: 'Star',
      value: 98,
      suffix: '%',
      label: 'Положительных отзывов',
      color: 'text-yellow-500'
    },
    {
      icon: 'TrendingUp',
      value: 24,
      suffix: '/7',
      label: 'Техподдержка',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Статистика проекта</h2>
            <p className="text-xl text-muted-foreground">ANEKOX в цифрах</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-border bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto ${stat.color}`}>
                    <Icon name={stat.icon} size={32} />
                  </div>
                  <div className="space-y-1">
                    <div className={`text-4xl font-bold ${stat.color}`}>
                      <StatsCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
