import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { WidgetCalendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Moon } from 'lucide-react';

export default function Clockapp() {
  function currentDateString() {
    const now = new Date();

    const weekDays = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
    const months = [
      'jan.',
      'fev.',
      'mar.',
      'abr.',
      'mai.',
      'jun.',
      'jul.',
      'ago.',
      'set.',
      'out.',
      'nov.',
      'dez.',
    ];

    const daysOfWeek = weekDays[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${daysOfWeek}${day} de ${month} ${hour}:${minute}`;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
        >
          <span>{currentDateString()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-transparent border-none shadow-none">
        <div className="flex flex-col gap-2">
          <WidgetCustomCalendar />

          <WidgetWeather />
        </div>
      </PopoverContent>
    </Popover>
  );
}

const WidgetCustomCalendar = () => {
  return (
    <WidgetCalendar
      mode="single"
      selected={new Date()}
      onSelect={() => null}
      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg"
    />
  );
};

const WidgetWeather = () => {
  return (
    <Card className="bg-neutral-600 border-none py-2">
      <CardContent className="flex flex-col px-3">
        <span className="text-sm text-neutral-200">Campo grande</span>
        <span className="text-2xl text-neutral-200">22°</span>
        <br />
        <Moon className="text-neutral-200 size-4" />
        <span className="text-xs text-neutral-200">Nublado</span>
        <span className="text-xs text-neutral-200">Max 32° - min 22°</span>
      </CardContent>
    </Card>
  );
};
