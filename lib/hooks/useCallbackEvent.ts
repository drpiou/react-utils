import { useCallback, useRef } from 'react';

const useCallbackEvent = <F extends (...args: any[]) => any>(func: F): F => {
  const functionRef = useRef<F>(func);

  functionRef.current = func;

  // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-argument
  return useCallback(((...args) => functionRef.current(...args)) as F, []);
};

export default useCallbackEvent;
