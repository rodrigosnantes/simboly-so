import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import { Cog } from 'lucide-react';

export default function DockerConfig() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.Configuration}
      reference={nodeRef}
      dragArea={{
        name: 'Configurações',
        icon: Cog,
      }}
      resize={false}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-white">Configuration</CardTitle>
        <CardDescription className="text-white">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>aakdajsldkj</CardContent>
    </AppContainer>
  );
}
