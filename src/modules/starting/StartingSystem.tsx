import { useMyContext } from '@/App';
import { Input } from '@/components/ui/input';
import { KeyboardEvent } from 'react';

export default function StartSystem() {
  const { setLoading, setLogged } = useMyContext();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setLoading(true);
      e.preventDefault();

      setTimeout(() => {
        setLoading(false);
        setLogged(true);
      }, 2000);
    }
  };

  return (
    <div className="w-screen h-screen bg-purple-900">
      <div className="flex justify-center items-center h-full flex-col">
        <img
          src="https://aniyuki.com/wp-content/uploads/2023/09/aniyuki-gojo-satoru-avatar-53.jpg"
          alt="logo"
          className="w-3xs h-3xs rounded-full"
        />
        <Input
          type="password"
          placeholder="Senha"
          onKeyDown={handleKeyDown}
          className="w-full max-w-xs px-4 py-2 mt-4 text-neutral-50 bg-white/20 backdrop-blur-md border border-white/30 ocus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
        />
      </div>
    </div>
  );
}
