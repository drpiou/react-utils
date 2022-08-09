import React from 'react';
import { useIsMounted, useOnMount, useOnUnmount, useStateSafe, useTimeout } from '../lib';
import './App.css';

function App(): JSX.Element {
  const isMounted = useIsMounted();

  const [state, setState] = React.useState<boolean>(false);

  const handleClick = (): void => {
    if (isMounted.current) {
      setState((prevState) => !prevState);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClick}>mount/unmount</button>

        {state && <Thing />}
      </div>
    </div>
  );
}

function Thing(): JSX.Element {
  useOnMount(() => {
    alert('mounted');
  });

  useOnUnmount(() => {
    alert('unmounted');
  });

  const timeout = useTimeout();

  const [state, setState] = useStateSafe<boolean>(false);

  const handleClickSafe = (): void => {
    setTimeout(() => setState((prevState) => !prevState), 2000);
  };

  const handleClickTimeout = (): void => {
    timeout.set(() => setState((prevState) => !prevState), 2000);
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClickSafe}>{`click to change state in 2s (useStateSafe: ${String(state)})`}</button>
        <button onClick={handleClickTimeout}>{`click to change state in 2s (useTimeout: ${String(state)})`}</button>
      </div>
    </div>
  );
}

export default App;
