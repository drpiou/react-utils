import { useEffect, useRef } from 'react';

export type UseOnUnmountCallback = () => void;

const useOnUnmount = (callback: UseOnUnmountCallback): void => {
  const callbackRef = useRef<UseOnUnmountCallback>(callback);

  callbackRef.current = callback;

  useEffect(() => {
    return (): void => {
      callbackRef.current();
    };
  }, []);
};

export default useOnUnmount;
