'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const React = require('react');
const { useOnMount } = require('..');

test('@drpiou/react-utils:useOnMount', () => {
  const { result: state } = renderHook(() => React.useState(1));

  renderHook(() =>
    useOnMount(() =>
      act(() => {
        state.current[1]((prevState) => prevState + 1);
      }),
    ),
  );

  expect(state.current[0]).toBe(2);
});
