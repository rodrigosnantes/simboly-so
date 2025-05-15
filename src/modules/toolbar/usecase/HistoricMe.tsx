import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';

import { PersonStanding } from 'lucide-react';
import AppContainer from '@/modules/docker/AppContainer';

export default function HistoricMe() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.historic_me}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      dragArea={{
        name: 'Tragetória',
        icon: PersonStanding,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">Tragetória até aqui</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] text-neutral-200 font-thin text-sm">
          Minha paixão por tecnologia começou cedo. Desde criança, sempre fui
          curioso com qualquer coisa que envolvesse tecnologia. O que eu não
          imaginava era que acabaria mergulhando de cabeça no mundo do
          desenvolvimento, especialmente no front-end. No início da minha
          carreira, optei por seguir com Java, linguagem que me chamou bastante
          atenção na faculdade. Gostava de criar soluções que automatizavam
          tarefas do meu dia a dia, tanto no ambiente profissional quanto
          pessoal. Em 2019, saí da minha cidade natal, Campo Grande - MS, e me
          mudei para Florianópolis - SC.
          <br />
          Numa tentativa audaciosa, me inscrevi para uma vaga de front-end em
          uma startup. Durante o processo seletivo, deixei claro que minha
          experiência era com Java e por sorte (ou destino), era justamente a
          linguagem usada na API da empresa. Com paciência, me deram uma chance.
          Fizeram um teste técnico que, sinceramente, nem sei se fui tão bem
          assim... mas fui sincero, transparente e compartilhei de coração
          minhas expectativas. Fui contratado. Passei cerca de 3 anos nessa
          empresa, onde aprendi muito. Trabalhei com Java, Python, Vue e React e
          foi aí que desenvolvi um gosto especial pela stack front-end.
          <br />
          Mais tarde, senti que era hora de sair da zona de conforto. Surgiu a
          oportunidade de participar de um projeto desafiador: migrar um sistema
          legado e desatualizado para uma nova aplicação totalmente em React,
          com foco completo no front.
          <i>
            Quem diria, hein? Do back-end com Java para me apaixonar pelo
            front-end.
          </i>
          Aceitei o desafio e sigo firme desde então. Cada vez mais confiante,
          envolvido e fascinado por esse universo que não para de surpreender.
          Hoje, com aproximadamente 4 anos de jornada profissional nessa
          organização, me sinto orgulhoso da minha trajetória, pelos desafios,
          pelas vitórias, pelos erros que viraram aprendizado e pelos amigos que
          conquistei ao longo do caminho.
          <br />
          Acomodado? Nunca. Estagnado? Jamais. Ainda tenho muito a conquistar,
          aprender e criar e estou animado com cada passo que vem pela frente.
        </ScrollArea>
      </CardContent>
    </AppContainer>
  );
}
