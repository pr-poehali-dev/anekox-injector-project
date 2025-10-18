import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Changelog = () => {
  const releases = [
    {
      version: '2.5.0',
      date: '15 октября 2024',
      type: 'major',
      changes: [
        { type: 'new', text: 'Добавлена поддержка новых Lua библиотек' },
        { type: 'new', text: 'Встроенный редактор кода с подсветкой синтаксиса' },
        { type: 'improved', text: 'Улучшена скорость инъекции на 40%' },
        { type: 'fixed', text: 'Исправлена ошибка при работе с Windows 11 23H2' }
      ]
    },
    {
      version: '2.4.2',
      date: '1 октября 2024',
      type: 'patch',
      changes: [
        { type: 'fixed', text: 'Исправлены проблемы со стабильностью' },
        { type: 'improved', text: 'Оптимизация использования памяти' },
        { type: 'fixed', text: 'Устранен баг с автообновлением' }
      ]
    },
    {
      version: '2.4.0',
      date: '20 сентября 2024',
      type: 'minor',
      changes: [
        { type: 'new', text: 'Новый темный интерфейс' },
        { type: 'new', text: 'Поддержка горячих клавиш' },
        { type: 'improved', text: 'Улучшена совместимость со скриптами' },
        { type: 'fixed', text: 'Исправлены мелкие баги интерфейса' }
      ]
    },
    {
      version: '2.3.1',
      date: '5 сентября 2024',
      type: 'patch',
      changes: [
        { type: 'fixed', text: 'Критическое исправление безопасности' },
        { type: 'improved', text: 'Повышена стабильность работы' }
      ]
    },
    {
      version: '2.3.0',
      date: '25 августа 2024',
      type: 'minor',
      changes: [
        { type: 'new', text: 'Библиотека готовых скриптов' },
        { type: 'new', text: 'Система избранных скриптов' },
        { type: 'improved', text: 'Улучшен пользовательский интерфейс' },
        { type: 'fixed', text: 'Исправлены ошибки при загрузке файлов' }
      ]
    },
    {
      version: '2.2.0',
      date: '10 августа 2024',
      type: 'minor',
      changes: [
        { type: 'new', text: 'Автоматическое обновление инжектора' },
        { type: 'improved', text: 'Оптимизирована работа с большими скриптами' },
        { type: 'fixed', text: 'Устранены проблемы совместимости' }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'new':
        return { icon: 'Plus', color: 'text-green-500', label: 'Новое' };
      case 'improved':
        return { icon: 'TrendingUp', color: 'text-blue-500', label: 'Улучшено' };
      case 'fixed':
        return { icon: 'Wrench', color: 'text-orange-500', label: 'Исправлено' };
      default:
        return { icon: 'Circle', color: 'text-gray-500', label: 'Изменение' };
    }
  };

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case 'major':
        return 'bg-primary text-primary-foreground';
      case 'minor':
        return 'bg-blue-500 text-white';
      case 'patch':
        return 'bg-muted text-foreground';
      default:
        return 'bg-muted text-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Changelog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              История обновлений и изменений ANEKOX
            </p>
          </div>

          <div className="space-y-8">
            {releases.map((release, index) => (
              <Card 
                key={index} 
                className="border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl">v{release.version}</CardTitle>
                      <Badge className={getVersionBadgeColor(release.type)}>
                        {release.type === 'major' && 'Major'}
                        {release.type === 'minor' && 'Minor'}
                        {release.type === 'patch' && 'Patch'}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {release.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => {
                      const typeInfo = getTypeIcon(change.type);
                      return (
                        <div 
                          key={changeIndex} 
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <Icon 
                            name={typeInfo.icon} 
                            size={18} 
                            className={`mt-0.5 ${typeInfo.color}`} 
                          />
                          <div className="flex-1">
                            <p className="text-sm text-foreground">{change.text}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {typeInfo.label}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-muted/30 rounded-xl border border-border">
            <Icon name="Bell" size={32} className="text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Следите за обновлениями</h3>
            <p className="text-muted-foreground mb-4">
              Подпишитесь на наши каналы, чтобы узнавать о новых версиях первыми
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Icon name="MessageCircle" size={18} />
                Discord
              </button>
              <button className="px-6 py-2 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Icon name="Send" size={18} />
                Telegram
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Changelog;
