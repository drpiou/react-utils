import React from 'react';

export type UseOnUnmountCallback = () => void;

const useOnUnmount = (callback: UseOnUnmountCallback): void => {
  const callbackRef = React.useRef<UseOnUnmountCallback>(callback);

  callbackRef.current = callback;

  React.useEffect(() => {
    return (): void => {
      callbackRef.current();
    };
  }, []);
};

export default useOnUnmount;
