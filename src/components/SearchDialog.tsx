import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import Icon from '@/components/ui/icon';

interface SearchResult {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const searchData: SearchResult[] = [
    { title: 'Главная', description: 'Главная страница ANEKOX', path: '/', icon: 'Home' },
    { title: 'Возможности', description: 'Все функции и преимущества', path: '/features', icon: 'Zap' },
    { title: 'Инструкция', description: 'Как начать работу с ANEKOX', path: '/instructions', icon: 'BookOpen' },
    { title: 'FAQ', description: 'Часто задаваемые вопросы', path: '/faq', icon: 'HelpCircle' },
    { title: 'О проекте', description: 'История и разработчик', path: '/developer', icon: 'User' },
    { title: 'Changelog', description: 'История обновлений', path: '/changelog', icon: 'ListTree' },
    { title: 'Скачать', description: 'Загрузить ANEKOX', path: '/download', icon: 'Download' },
    { title: 'Безопасность', description: 'Защита от обнаружения', path: '/features', icon: 'Lock' },
    { title: 'Надежность', description: 'Стабильная работа без сбоев', path: '/features', icon: 'Activity' },
    { title: 'Поддержка', description: 'Связаться с нами', path: '/faq', icon: 'MessageCircle' },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 rounded-lg hover:bg-muted transition-colors"
      >
        <Icon name="Search" size={16} />
        <span>Поиск...</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Поиск по сайту..." />
        <CommandList>
          <CommandEmpty>Ничего не найдено.</CommandEmpty>
          <CommandGroup heading="Страницы">
            {searchData.map((item) => (
              <CommandItem
                key={item.path}
                onSelect={() => handleSelect(item.path)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <Icon name={item.icon} size={18} className="text-primary" />
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
