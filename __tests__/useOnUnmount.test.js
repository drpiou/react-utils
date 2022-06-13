'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const React = require('react');
const { useOnUnmount } = require('..');

test('@drpiou/react-utils:useOnUnmount', () => {
  const { result: state } = renderHook(() => React.useState(1));

  const { unmount } = renderHook(() =>
    useOnUnmount(() =>
      act(() => {
        state.current[1]((prevState) => prevState + 1);
      }),
    ),
  );

  expect(state.current[0]).toBe(1);

  unmount();

  expect(state.current[0]).toBe(2);
});
