import { ScrollArea } from '@/components/ui/scroll-area';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';

import { Hammer } from 'lucide-react';
import AppContainer from '@/modules/docker/AppContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServiceMe() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.service}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      dragArea={{
        name: 'Serviços',
        icon: Hammer,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">Serviços</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <div className="grid grid-cols-3 content-stretch gap-2">
            {skills.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="h-full bg-transparent border border-white/30 text-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-neutral-200">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </AppContainer>
  );
}

const skills = [
  { id: 1, name: 'Landing Pages', value: 80 },
  { id: 2, name: 'Sites Corporativos', value: 80 },
  { id: 3, name: 'Sistemas Gerenciais', value: 100 },
  { id: 4, name: 'Sistemas Pessoais', value: 100 },
  { id: 5, name: 'Web Design', value: 50 },
];
