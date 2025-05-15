import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import { AppleIcon } from 'lucide-react';
export default function AboutSo() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.about_so}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 60,
      }}
      dragArea={{
        name: 'Sobre o simboly SO',
        icon: AppleIcon,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200">Sobre o sistema</CardTitle>
      </CardHeader>
      <CardContent>
        <span className="text-neutral-200 text-sm font-thin">
          Olá! Essa aplicação foi criada com muito carinho e funciona como meu
          portfólio pessoal. Decidi fugir do tradicional, chega de landing pages
          básicas e interfaces genéricas. Aqui, a proposta é outra: esta área
          foi pensada para parecer um pequeno sistema operacional. E mais do que
          parecer, ela funciona como um com ferramentas reais, não apenas visual
          bonito. A ideia é que seja uma aplicação útil, interativa e escalável,
          que me permita explorar meus conhecimentos e criar funcionalidades
          novas conforme vou aprendendo e experimentando. Claro, como todo
          sistema em evolução, bugs podem aparecer (faz parte da graça, né?). Se
          você encontrar algo estranho, quebrado ou esquisito, vou ficar muito
          feliz se puder me avisar:
        </span>
        <br />
        <span className="text-neutral-300 text-md font-medium">
          📩 rodrigo@gmail.com
        </span>
      </CardContent>
    </AppContainer>
  );
}
