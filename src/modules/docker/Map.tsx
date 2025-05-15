import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import { MapIcon } from 'lucide-react';

export default function Map() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.Map}
      reference={nodeRef}
      resize={false}
      dragArea={{
        name: 'Mapa',
        icon: MapIcon,
      }}
      appPosition={{
        defaultX: 240,
        defaultY: 200,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-white">Mapa</CardTitle>
        <CardDescription className="text-white">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>aakdajsldkj</CardContent>
    </AppContainer>
  );
}
