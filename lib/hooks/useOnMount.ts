import React from 'react';

export type UseOnMountCallback = () => void;

const useOnMount = (callback: UseOnMountCallback): void => {
  const callbackRef = React.useRef<UseOnMountCallback>(callback);

  React.useEffect(() => {
    callbackRef.current();
  }, []);
};

export default useOnMount;
