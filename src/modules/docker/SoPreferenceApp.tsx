import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { useRef } from 'react';
import AppContainer from './AppContainer';
import { PersonStanding } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SoPreferenceApp() {
  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  return (
    <AppContainer
      appName={Applications.so_preference}
      reference={nodeRef}
      resize={false}
      appPosition={{
        defaultX: 340,
        defaultY: 10,
      }}
      appWindow={{
        width: 'w-sm',
      }}
      dragArea={{
        name: 'Preferências do sistema',
        icon: PersonStanding,
      }}
    >
      <CardHeader className="mt-5">
        <CardTitle className="text-neutral-200 font-medium">
          Preferências do sistema
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-light"
            >
              Habilitar movimentação das janelas
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Mostrar indicador da bateria
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Permitir minimizar janelas
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Permitir aumento automatico das janelas
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <div className="flex justify-between">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 font-thin"
            >
              Habilitar menu de contexto
            </Label>
            <Switch id="airplane-mode" />
          </div>
        </div>
      </CardContent>
    </AppContainer>
  );
}
