import DockerBar from './modules/docker/DockerBar';
import './App.css';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import Desktop from './modules/desktop/Desktop';
import { TAppRuntime } from './model/application-model';
import Toolbar from './modules/toolbar/Toolbar';
import StartSystem from './modules/starting/StartingSystem';
import { ProgressDemo } from './modules/starting/LoadingSystem';

interface MyProviderProps {
  children: ReactNode;
}

interface MyContextType {
  application: TAppRuntime[];
  setApplication: Dispatch<SetStateAction<TAppRuntime[]>>;
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleAppRun: (app: Partial<TAppRuntime>) => void;
}

const defaultState: MyContextType = {
  application: [],
  setApplication: () => {},
  logged: true,
  setLogged: () => {},
  loading: true,
  setLoading: () => {},
  handleAppRun: () => {},
};

const SoContext = createContext<MyContextType>(defaultState);

export function useMyContext() {
  return useContext(SoContext);
}

export function MyProvider({ children }: MyProviderProps) {
  const [application, setApplication] = useState<TAppRuntime[]>([]);
  const [logged, setLogged] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAppRun = (app: Partial<TAppRuntime>) => {
    setApplication((prev) => {
      const foundIndex = prev.findIndex((item) => item.id === app.id);

      if (foundIndex !== -1) {
        return prev.map((item, index) =>
          index === foundIndex
            ? { ...item, index: item.index + 1, minimize: !item.minimize }
            : item
        );
      }

      const runtimeApp: TAppRuntime = {
        ...app,
        index: 1,
        minimize: false,
      };

      return [...prev, runtimeApp];
    });
  };

  return (
    <SoContext.Provider
      value={{
        application,
        setApplication,
        logged,
        setLogged,
        loading,
        setLoading,
        handleAppRun,
      }}
    >
      {children}
    </SoContext.Provider>
  );
}

export default function App() {
  return (
    <MyProvider>
      <AppTest />
    </MyProvider>
  );
}

const AppTest = () => {
  const { logged, loading } = useMyContext();

  if (loading) return <ProgressDemo />;

  if (!logged) return <StartSystem />;

  return (
    <div className="w-screen h-screen relative flex flex-col overflow-auto bg-purple-700">
      <Toolbar />
      <Desktop />
      <DockerBar />
    </div>
  );
};
