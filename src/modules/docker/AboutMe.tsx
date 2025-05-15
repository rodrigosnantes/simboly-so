import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import { PersonStanding } from 'lucide-react';

export default function AboutMe() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.about_me}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      dragArea={{
        name: 'Sobre mim',
        icon: PersonStanding,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">Sobre o mim</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-neutral-200 text-sm font-thin">
          Eu sou o Rodrigo, desenvolvedor web com mais de 7 anos de experiência
          criando aplicações funcionais, escaláveis e com interfaces que
          realmente importam. Meu maior diferencial está no equilíbrio entre
          design e código. Gosto de criar coisas bonitas, mas que também
          resolvam problemas reais. Tenho um olhar atento para a experiência do
          usuário e busco sempre entregar soluções bem pensadas, organizadas e
          com atenção aos detalhes. Sou movido por curiosidade e desafio. Estudo
          constantemente, me atualizo com novas tecnologias e estou sempre
          buscando formas de evoluir como profissional e criador. Trabalho com
          seriedade, mas gosto de manter as coisas leves — afinal, programar
          também pode (e deve) ser divertido. Sou natural de Campo Grande - MS,
          tenho 31 anos, sou pai de dois filhos e aprendi na prática o valor de
          organização, foco e resiliência, qualidades que levo para o meu dia a
          dia como dev. Se você procura alguém que una técnica, visão estética e
          responsabilidade na entrega, prazer: sou esse cara.
        </span>
      </CardContent>
    </AppContainer>
  );
}
