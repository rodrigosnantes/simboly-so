import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Bluetooth, Lock, Wifi } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function BluetoothApp() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
        >
          <Bluetooth className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-56 p-2">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center justify-between h-7 px-2">
            <Label htmlFor="airplane-mode" className="text-neutral-200">
              Bluetooth
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <Separator />
          <div className="flex flex-col">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 text-xs px-2 py-2 font-bold"
            >
              Dispositivos
            </Label>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1 ">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Bluetooth className="size-4" />
                </div>
                <span>Home</span>
              </div>
            </Button>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1 ">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Bluetooth className="size-4" />
                </div>
                <span>Home</span>
              </div>
            </Button>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1 ">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Bluetooth className="size-4" />
                </div>
                <span>Home</span>
              </div>
            </Button>
          </div>

          <Separator />

          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-7 shadow-none p-1"
            size="sm"
          >
            <span>Preferencias de Bluetooth</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
