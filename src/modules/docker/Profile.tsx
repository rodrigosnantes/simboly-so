import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';

export default function Profile() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.Profile}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 390,
        defaultY: 200,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-white">Perfil</CardTitle>
        <CardDescription className="text-white">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>aakdajsldkj</CardContent>
    </AppContainer>
  );
}
