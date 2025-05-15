import { useMyContext } from '@/App';
import { Card } from '@/components/ui/card';
import { Applications } from '@/model/application-model';
import { ReactNode, RefObject, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import type { LucideIcon } from 'lucide-react';

type TAppContainerProps = {
  appName: Applications;
  reference: RefObject<HTMLDivElement>;
  children: ReactNode;
  resize: boolean;
  appPosition?: {
    defaultX: number;
    defaultY: number;
  };
  dragArea?: {
    name?: string;
    icon?: LucideIcon | null;
  };
  appWindow?: {
    width: string;
  };
};

export default function AppContainer({
  appName,
  reference,
  children,
  resize,
  appWindow = {
    width: 'w-lg',
  },
  appPosition = {
    defaultX: 200,
    defaultY: 200,
  },
  dragArea = {
    name: '',
    icon: null,
  },
}: TAppContainerProps) {
  const { setApplication } = useMyContext();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleAppRun = (appName: Applications) => {
    setApplication((prev) => {
      const foundIndex = prev.findIndex((item) => item.id === appName);
      return prev.map((item, index) =>
        index === foundIndex ? { ...item, index: 3 } : { ...item, index: 1 }
      );
    });
  };

  const handleMinimizeWindow = (appName: Applications) => {
    setApplication((prev) => {
      const foundIndex = prev.findIndex((item) => item.id === appName);
      return prev.map((item, index) =>
        index === foundIndex
          ? { ...item, index: item.index + 1, minimize: true }
          : item
      );
    });
  };

  useEffect(() => {
    const el = reference.current;
    if (!el) return;

    // 1) Callback que será chamado sempre que o tamanho mudar
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // contentRect já traz width/height exatos
        const { width, height } = entry.contentRect;
        setWidth(width);
        setHeight(height);
        // console.log(`Nova largura: ${width}px, nova altura: ${height}px`);
        // aqui você pode, por exemplo, disparar um setState
        // setSize({ width, height })
      }
    });

    // 2) Começa a observar o elemento
    resizeObserver.observe(el);

    // 3) Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [reference]);

  return (
    <Draggable
      key={appName}
      nodeRef={reference}
      bounds={{
        left: 0,
        right: window.innerWidth - width,
        top: 0,
        bottom: window.innerHeight - height,
      }}
      handle=".drag-handle"
      defaultPosition={{ x: appPosition.defaultX, y: appPosition.defaultY }}
      onMouseDown={() => handleAppRun(appName)}
    >
      <div
        ref={reference}
        className={`relative ${!resize ? `${appWindow.width}` : 'w-3xl'}`}
        id={`app-window${appName}`}
      >
        <Card className="w-full bg-white/20 backdrop-blur-md border border-white/30">
          <div className="drag-handle fixed inset-x-0 top-0 h-9 cursor-move rounded-t-lg border-b border-white/30">
            <div className="flex items-center h-full justify-between">
              <div className="flex items-center gap-2 h-full px-4">
                <div
                  className="h-3 w-3 rounded-full bg-amber-700 hover:bg-amber-600 cursor-default"
                  onClick={() =>
                    setApplication((prev) => {
                      return prev.filter((item) => item.id !== appName);
                    })
                  }
                />
                <div
                  className="h-3 w-3 rounded-full bg-amber-400 hover:bg-amber-200 cursor-default"
                  onClick={() => handleMinimizeWindow(appName)}
                />
                <div
                  className="h-3 w-3 rounded-full bg-emerald-600 hover:bg-emerald-300 cursor-default"
                  onClick={() => {
                    //   setResize(true);
                  }}
                />
              </div>

              {dragArea && (
                <div className="px-4 flex gap-1">
                  <span className="text-neutral-200 text-xs">
                    {dragArea?.name}
                  </span>
                  {dragArea.icon && (
                    <dragArea.icon className="size-4 text-neutral-100" />
                  )}
                </div>
              )}
            </div>
          </div>

          {children}
        </Card>
      </div>
    </Draggable>
  );
}
