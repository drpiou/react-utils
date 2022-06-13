import React from 'react';
import useOnUnmount from './useOnUnmount';

export type UseTimeoutSet = (callback: () => void, time: number) => void;

export type UseTimeoutReset = (callback: () => void, time: number) => void;

export type UseTimeoutClear = () => void;

export type UseTimeout = {
  set: UseTimeoutSet;
  reset: UseTimeoutReset;
  clear: UseTimeoutClear;
};

const useTimeout = (): UseTimeout => {
  const timeout = React.useRef<NodeJS.Timeout>();

  const set: UseTimeoutSet = React.useCallback((callback, time) => {
    timeout.current = setTimeout(callback, time);
  }, []);

  const clear: UseTimeoutClear = React.useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const reset: UseTimeoutReset = React.useCallback(
    (callback, time) => {
      clear();

      set(callback, time);
    },
    [clear, set],
  );

  useOnUnmount(() => {
    clear();
  });

  return React.useMemo(
    () => ({
      set,
      reset,
      clear,
    }),
    [clear, reset, set],
  );
};

export default useTimeout;
