import * as React from 'react';

import { Progress } from '@/components/ui/progress';

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-purple-900 ">
      <Progress value={progress} className="w-96" />
    </div>
  );
}
