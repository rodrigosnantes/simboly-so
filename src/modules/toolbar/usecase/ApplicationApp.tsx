import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function ApplicationApp() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-white/10 text-xs h-5"
          onClick={() => null}
        >
          Aplicativos
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" bg-white/20 backdrop-blur-md border border-white/30 w-64 p-2">
        <div className="flex flex-col gap-1">
          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Mapas
          </Button>

          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Relógio
          </Button>

          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Calendario
          </Button>
          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Perfil
          </Button>
          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Caclculadora
          </Button>
          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Musica
          </Button>
          <Button
            className="bg-transparent hover:bg-white/10 text-xs justify-between h-6 shadow-none p-1"
            size="sm"
          >
            Anotações
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
