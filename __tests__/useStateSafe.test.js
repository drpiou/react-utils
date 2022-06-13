'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const { useStateSafe } = require('..');

test('@drpiou/react-utils:useStateSafe', () => {
  const { result: state, unmount } = renderHook(() => useStateSafe(1));

  expect(typeof state.current).toBe('object');
  expect(typeof state.current[0]).toBe('number');
  expect(typeof state.current[1]).toBe('function');

  expect(state.current[0]).toBe(1);

  act(() => {
    state.current[1]((prevState) => prevState + 1);
  });

  expect(state.current[0]).toBe(2);

  unmount();

  act(() => {
    state.current[1]((prevState) => prevState + 1);
  });

  expect(state.current[0]).toBe(2);
});
