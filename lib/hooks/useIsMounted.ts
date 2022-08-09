import { RefObject, useEffect, useRef } from 'react';

export type UseIsMounted = RefObject<boolean>;

const useIsMounted = (): UseIsMounted => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
