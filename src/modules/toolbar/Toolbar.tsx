import { Button } from '@/components/ui/button';
import { Battery } from 'lucide-react';
import BluetoothApp from './usecase/BluetoothApp';
import WirelessApp from './usecase/WirelessApp';
import Clockapp from './usecase/Clockapp';
import AboutApp from './usecase/AboutApp';
import ApplicationApp from './usecase/ApplicationApp';
import DockerConfigApp from './usecase/DockerConfigApp';
import PersonalApp from './usecase/PersonalApp';
import ProfissionalApp from './usecase/ProfissionalApp';

export default function Toolbar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-7 bg-white/20 backdrop-blur-md border border-white/30 rounded-b-sm">
      <div className="flex h-full justify-between px-4 w-full">
        <div className="flex items-center">
          <AboutApp />
          <ApplicationApp />
          <DockerConfigApp />
          <PersonalApp />
          <ProfissionalApp />
        </div>

        <div className="flex items-center text-white">
          <Button
            size="sm"
            className="bg-transparent hover:bg-white/10 text-xs h-5"
            onClick={() => null}
          >
            <span className="flex items-center gap-1">
              100% <Battery className="size-5" />
            </span>
          </Button>

          <BluetoothApp />
          <WirelessApp />
          <Clockapp />
        </div>
      </div>
    </div>
  );
}
