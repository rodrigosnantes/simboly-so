import { useMyContext } from '@/App';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Applications, TAppRuntime } from '@/model/application-model';
import { Cog } from 'lucide-react';

export default function DockerConfigApp() {
  const { handleAppRun } = useMyContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
          onClick={() => null}
        >
          Docker
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-64 p-2">
        <div className="flex flex-col gap-1">
          {dockerConfigApps.map((app) => {
            return (
              <Button
                key={app.id}
                className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
                size="sm"
                onClick={() => handleAppRun(app)}
              >
                Preferência do docker
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const dockerConfigApps: Partial<TAppRuntime>[] = [
  {
    id: Applications.docker_preference,
    icon: Cog,
    appName: 'Preferência do docker',
  },
];
