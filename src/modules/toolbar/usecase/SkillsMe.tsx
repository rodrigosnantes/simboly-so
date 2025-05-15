import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';

import { Brain } from 'lucide-react';
import AppContainer from '@/modules/docker/AppContainer';
import { Progress } from '@/components/ui/progress';

export default function SkillsMe() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.skills}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      dragArea={{
        name: 'Especialidades',
        icon: Brain,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">Especialidades</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80 text-neutral-200 text-sm">
          {skills.map((item) => {
            return (
              <div key={item.id} className="py-1 px-4">
                <span className="font-thin">{item.name}</span>
                <Progress value={item.value} />
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
    </AppContainer>
  );
}

const skills = [
  { id: 1, name: 'Html', value: 80 },
  { id: 2, name: 'CSS', value: 80 },
  { id: 3, name: 'JavaScript', value: 100 },
  { id: 4, name: 'ReactJs', value: 100 },
  { id: 5, name: 'Node', value: 50 },
  { id: 6, name: 'MongoDB', value: 50 },
  { id: 7, name: 'MaterialUi', value: 65 },
  { id: 8, name: 'GitHub', value: 80 },
  { id: 9, name: 'Bitcuket', value: 90 },
  { id: 10, name: 'Tailwind', value: 85 },
  { id: 11, name: 'React-Hook-Form', value: 75 },
  { id: 12, name: 'Single-SPA', value: 70 },
  { id: 13, name: 'Leaflet', value: 85 },
];
