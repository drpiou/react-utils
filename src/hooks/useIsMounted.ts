import React from 'react';

export type UseIsMounted = React.RefObject<boolean>;

const useIsMounted = (): UseIsMounted => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
