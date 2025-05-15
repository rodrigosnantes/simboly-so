import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  AppWindowMac,
  Brain,
  BriefcaseBusiness,
  Hammer,
  Route,
} from 'lucide-react';
import { useMyContext } from '@/App';
import { Applications, TAppRuntime } from '@/model/application-model';

export default function ProfissionalApp() {
  const { handleAppRun } = useMyContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
          onClick={() => null}
        >
          Profissional
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
        </div>
      </PopoverContent>
    </Popover>
  );
}

const aboutApps: Partial<TAppRuntime>[] = [
  { id: Applications.historic_me, icon: Route, appName: 'Tragetória' },
  { id: Applications.exp_me, icon: BriefcaseBusiness, appName: 'Experiências' },
  {
    id: Applications.skills,
    icon: Brain,
    appName: 'Habilidades',
  },
  { id: Applications.service, icon: Hammer, appName: 'Serviços' },
  { id: Applications.about_so, icon: null, appName: 'Skills' },
  { id: Applications.about_so, icon: null, appName: 'Projetos' },
  { id: Applications.about_so, icon: null, appName: 'Contato' },
];
