'use strict';

const { renderHook } = require('@testing-library/react-hooks');
const { useIsMounted } = require('..');

test('@drpiou/react-utils:useIsMounted', () => {
  const { result: isMounted, unmount } = renderHook(() => useIsMounted());

  expect(typeof isMounted.current.current).toBe('boolean');

  expect(isMounted.current.current).toBe(true);

  unmount();

  expect(isMounted.current.current).toBe(false);
});
