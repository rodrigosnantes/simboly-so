import { useMyContext } from '@/App';
import { Button } from '@/components/ui/button';
import { Applications, TAppRuntime } from '@/model/application-model';

import {
  Calculator,
  Calendar,
  Clock,
  Cloudy,
  Cog,
  Map,
  Music,
  NotebookPen,
  UserPen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function DockerBar() {
  const { handleAppRun, application } = useMyContext();

  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-1 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl">
      <div className="flex gap-1">
        {dockerApps.map((app: Partial<TAppRuntime>) => {
          if (!app.icon) return null;
          const IconComponent: LucideIcon = app.icon;
          return (
            <Button
              key={app.id}
              size="icon"
              className="icon bg-transparent hover:bg-white/10 cursor-pointer "
              onClick={() => handleAppRun(app)}
              disabled={application.some((item) => item.id === app.id)}
            >
              <IconComponent className="size-6" />
            </Button>
          );
        })}

        {(application || []).filter((item) => item.minimize).length > 0 && (
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl" />
        )}

        {(application || [])
          .filter((item) => item.minimize)
          .map((app) => {
            if (!app.icon) return null;
            const IconComponent: LucideIcon = app.icon;
            return (
              <Button
                size="icon"
                className="bg-transparent hover:bg-white/10 cursor-pointer"
                onClick={() => handleAppRun(app)}
              >
                <IconComponent className="size-6" />
              </Button>
            );
          })}
      </div>
    </div>
  );
}

const dockerApps: Partial<TAppRuntime>[] = [
  { id: Applications.docker_preference, icon: Cog },
  { id: Applications.Map, icon: Map },
  { id: Applications.Clock, icon: Clock },
  { id: Applications.Calendar, icon: Calendar },
  { id: Applications.Profile, icon: UserPen },
  { id: Applications.Calculator, icon: Calculator },
  { id: Applications.Music, icon: Music },
  { id: Applications.Note, icon: NotebookPen },
  { id: Applications.Time, icon: Cloudy },
];
