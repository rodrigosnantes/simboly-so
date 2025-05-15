import { useMyContext } from '@/App';
import { ApplicationsComponent } from '@/model/application-model';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export default function Desktop() {
  const { application } = useMyContext();

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="absolute bottom-0 left-0 right-0 top-7 bg-purple-600">
          {application.map((app) => {
            const Component = ApplicationsComponent[app.id];
            if (!Component) return null;
            return (
              <div
                key={app.id}
                className={`absolute ${app.minimize ? 'hidden' : 'block'}`}
                style={{ zIndex: app.index }}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-white/20 backdrop-blur-md border border-white/30">
        <ContextMenuItem className="text-neutral-100">Profile</ContextMenuItem>
        <ContextMenuItem className="text-neutral-100">Billing</ContextMenuItem>
        <ContextMenuItem className="text-neutral-100">Team</ContextMenuItem>
        <ContextMenuItem className="text-neutral-100">
          Subscription
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
