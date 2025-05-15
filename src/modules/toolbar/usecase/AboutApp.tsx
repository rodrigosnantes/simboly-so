import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Apple, AppWindowMac, Info } from 'lucide-react';
import { useMyContext } from '@/App';
import { Applications, TAppRuntime } from '@/model/application-model';
import { Separator } from '@/components/ui/separator';

export default function AboutApp() {
  const { setLogged, setLoading, handleAppRun } = useMyContext();

  const handleSoActions = (app: Partial<TAppRuntime>) => {
    if (app.id === 1) {
      setLogged(false);
      return;
    }

    if (app.id === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setLogged(false);
      }, 2000);
      return;
    }

    if (app.id === 3) {
      return;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
          onClick={() => null}
        >
          <Apple className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-64 p-2">
        <div className="flex flex-col gap-1">
          {aboutApps.map((app) => {
            return (
              <Button
                key={app.id}
                className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
                size="sm"
                onClick={() => handleAppRun(app)}
              >
                {app.appName}
              </Button>
            );
          })}

          <Separator />

          {aboutApps2.map((app) => {
            return (
              <Button
                key={app.id}
                className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
                size="sm"
                onClick={() => handleSoActions(app)}
              >
                {app.appName}
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const aboutApps: Partial<TAppRuntime>[] = [
  { id: Applications.about_so, icon: Info, appName: 'Sobre o sistema' },
  {
    id: Applications.so_preference,
    icon: AppWindowMac,
    appName: 'Preferências do sistema',
  },
];

const aboutApps2: Partial<TAppRuntime>[] = [
  { id: 1, appName: 'Bloquear' },
  { id: 2, appName: 'Reiniciar' },
  { id: 3, appName: 'Desligar' },
];
