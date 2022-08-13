import { useEffect, useRef } from 'react';

export type UseOnMountCallback = () => void;

const useOnMount = (callback: UseOnMountCallback): void => {
  const callbackRef = useRef<UseOnMountCallback>(callback);

  useEffect(() => {
    callbackRef.current();
  }, []);
};

export default useOnMount;
