import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import useIsMounted from './useIsMounted';

export type UseStateSafe<T> = [T, Dispatch<SetStateAction<T>>];

const useStateSafe = <T = unknown>(initialValue?: SetStateAction<T>): UseStateSafe<T> => {
  const isMounted = useIsMounted();

  const [state, setState] = useState<T>(initialValue as never);

  const newSetState = useCallback(
    (value: SetStateAction<T>) => {
      if (isMounted.current) {
        setState(value);
      }
    },
    [isMounted],
  );

  return [state, newSetState];
};

export default useStateSafe;
