import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PersonStanding } from 'lucide-react';
import { useMyContext } from '@/App';
import { Applications, TAppRuntime } from '@/model/application-model';

export default function PersonalApp() {
  const { handleAppRun } = useMyContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
          onClick={() => null}
        >
          Pessoal
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-64 p-2">
        <div className="flex flex-col gap-1">
          {aboutApps.map((app) => {
            return (
              <Button
                id={app.id}
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
  { id: Applications.about_me, icon: PersonStanding, appName: 'Sobre mim' },
];
