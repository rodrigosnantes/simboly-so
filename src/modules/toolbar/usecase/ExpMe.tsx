import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';

import { BriefcaseBusiness } from 'lucide-react';
import AppContainer from '@/modules/docker/AppContainer';

export default function ExpMe() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.exp_me}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      dragArea={{
        name: 'Experiências',
        icon: BriefcaseBusiness,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">
          Experiências profissionais
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-auto text-neutral-200 text-sm">
          <div className="flex flex-col gap-4">
            <div>
              <p>10/02/2019 - 13/09/2021</p>
              <p className="font-medium text-md">Web Developer</p>
              <span className="font-thin">
                Experiência em um Web E-commerce de grande porte, onde fui
                responsável pelo desenvolvimento de soluções inteligentes, bem
                como pela criação de interfaces responsivas, atraentes e
                intuitivas. Além disso, trabalhei na otimização de desempenho e
                na garantia de compatibilidade entre os navegadores.
              </span>
            </div>

            <div>
              <p>27/09/2021 - atual</p>
              <p className="font-medium text-md">Web Developer</p>
              <span className="font-thin">
                Participei ativamente do desenvolvimento de um sistema de
                gerenciamento de dados voltado para o controle de barragens.
                Minha atribuição era criar soluções inteligentes para análise e
                monitoramento de dados em tempo real, fornecendo insights
                cruciais para uma efetiva supervisão dessas estruturas. Além
                disso, utilizei tecnologias como single-spa e Leaflet.js para
                aprimorar a experiência do produto e do usuário final.
              </span>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </AppContainer>
  );
}
