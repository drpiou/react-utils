import React from 'react';
import useIsMounted from './useIsMounted';

export type UseStateSafe<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const useStateSafe = <T>(initialValue: T | (() => T)): UseStateSafe<T> => {
  const isMounted = useIsMounted();

  const [state, setState] = React.useState(initialValue);

  const newSetState = React.useCallback(
    (value: React.SetStateAction<T>) => {
      if (isMounted.current) {
        setState(value);
      }
    },
    [isMounted],
  );

  return [state, newSetState];
};

export default useStateSafe;
