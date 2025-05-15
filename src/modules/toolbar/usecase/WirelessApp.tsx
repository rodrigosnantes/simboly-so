import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Lock, Wifi } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function WirelessApp() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
        >
          <Wifi className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-72 p-2">
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 items-center justify-between h-7 px-2">
            <Label htmlFor="airplane-mode" className="text-neutral-200">
              Wi-Fi
            </Label>
            <Switch id="airplane-mode" />
          </div>
          <Separator />
          <div className="flex flex-col">
            <Label
              htmlFor="airplane-mode"
              className="text-neutral-200 text-xs px-2 py-2 font-bold"
            >
              Redes Preferidas
            </Label>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Wifi className="size-4" />
                </div>
                <span>Home</span>
              </div>
              <Lock />
            </Button>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1 ">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Wifi className="size-4" />
                </div>
                <span>Home</span>
              </div>
              <Lock />
            </Button>

            <Button
              className="bg-transparent hover:bg-white/10 text-xs justify-between h-8 shadow-none p-1"
              size="sm"
            >
              <div className="flex items-center gap-1">
                <div className="flex w-5 h-5 bg-white/10 rounded-full justify-center items-center">
                  <Wifi className="size-4" />
                </div>
                <span>Home</span>
              </div>
              <Lock />
            </Button>
          </div>

          <Separator />

          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-7 shadow-none p-1"
            size="sm"
          >
            Preferencias de rede
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
