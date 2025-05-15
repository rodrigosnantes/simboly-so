import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import {
  Calculator,
  Calendar,
  Clock,
  Cloudy,
  Cog,
  Music,
  NotebookPen,
  PersonStanding,
  UserPen,
  Map,
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
import { Applications, TAppRuntime } from '@/model/application-model';

export default function DockerPreferencesApp() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.docker_preference}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      appWindow={{
        width: 'w-sm',
      }}
      dragArea={{
        name: 'Preferências do docker',
        icon: PersonStanding,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200 font-medium">
          Preferências do docker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Mostrar docker
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Mostrar app minimizados
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Tamanho dos icones
            </Label>
            <Switch id="airplane-mode" />
          </div>

          <div className="py-2">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin py-2"
            >
              Aplicativos do Docker
            </Label>
            {dockerApps.map((app) => {
              const IconComponent: LucideIcon = app.icon!;
              return (
                <Button
                  key={app.id}
                  size="icon"
                  className="icon bg-transparent hover:bg-white/10 cursor-pointer "
                  onClick={() => null}
                >
                  <IconComponent className="size-6" />
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </AppContainer>
  );
}

const dockerApps: Partial<TAppRuntime>[] = [
  { id: 1, icon: Cog },
  { id: 2, icon: Map },
  { id: 3, icon: Clock },
  { id: 3, icon: Calendar },
  { id: 4, icon: UserPen },
  { id: 5, icon: Calculator },
  { id: 6, icon: Music },
  { id: 7, icon: NotebookPen },
  { id: 8, icon: Cloudy },
];
