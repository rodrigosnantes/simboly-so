import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';

export default function Calculator() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.Calculator}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 430,
        defaultY: 430,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-white">Calculadora</CardTitle>
        <CardDescription className="text-white">
          Deploy your new project in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>aakdajsldkj</CardContent>
    </AppContainer>
  );
}
