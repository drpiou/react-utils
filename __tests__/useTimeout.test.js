'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const { TimeoutError } = require('@testing-library/react-hooks/lib/helpers/error');
const React = require('react');
const { useTimeout } = require('..');

test('@drpiou/react-utils:useTimeout', async () => {
  const { result: state, waitForNextUpdate } = renderHook(() => React.useState(1));

  const { result: timeout, unmount } = renderHook(() => useTimeout());

  expect(typeof timeout.current).toBe('object');
  expect(typeof timeout.current.set).toBe('function');
  expect(typeof timeout.current.reset).toBe('function');
  expect(typeof timeout.current.clear).toBe('function');

  timeout.current.set(
    () =>
      act(() => {
        state.current[1]((prevState) => prevState + 1);
      }),
    100,
  );

  expect(state.current[0]).toBe(1);

  await waitForNextUpdate();

  expect(state.current[0]).toBe(2);

  timeout.current.set(
    () =>
      act(() => {
        state.current[1]((prevState) => prevState + 1);
      }),
    100,
  );

  unmount();

  try {
    await waitForNextUpdate();
  } catch (e) {
    if (!(e instanceof TimeoutError)) {
      throw e;
    }
  }

  expect(state.current[0]).toBe(2);
});
