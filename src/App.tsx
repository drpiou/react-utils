import { log } from '@drpiou/ts-utils';
import React, { Component, HTMLProps, useState } from 'react';
import { useIsMounted, useOnMount, useOnUnmount, useStateSafe, useTimeout, withHooks, WithHooksProps } from '../lib';
import './App.css';

const App = (): JSX.Element => {
  const [state, setState] = useState<boolean>(false);

  const handleClick = (): void => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <div className={'card'}>
        <button onClick={handleClick}>mount/unmount</button>
      </div>

      {state && (
        <>
          <Thing />
          <HookedThing />
        </>
      )}
    </>
  );
};

const Thing = (): JSX.Element => {
  useOnMount(() => {
    log('mounted');
  });

  useOnUnmount(() => {
    log('unmounted');
  });

  const timeout = useTimeout();

  const [state, setState] = useStateSafe<boolean>(false);

  const handleClickSafe = (): void => {
    setTimeout(() => setState((prevState) => !prevState), 3000);
  };

  const handleClickTimeout = (): void => {
    timeout.set(() => setState((prevState) => !prevState), 3000);
  };

  return (
    <div className={'card'}>
      <button onClick={handleClickSafe}>{`click to change state in 3s (useStateSafe: ${String(state)})`}</button>
      <br />
      <button onClick={handleClickTimeout}>{`click to change state in 3s (useTimeout: ${String(state)})`}</button>
    </div>
  );
};

type Props = WithHooksProps<
  {
    useIsMounted: typeof useIsMounted;
    useOnMount: typeof useOnMount;
    useOnUnmount: typeof useOnUnmount;
  },
  HTMLProps<HTMLParagraphElement>
> & {
  // useIsMounted: ReturnType<typeof useIsMounted>;
  // useOnMount: ReturnType<typeof useOnMount>;
};

type State = {
  state: boolean;
};

class ClassThing extends Component<Props, State> {
  _handleClick = this.handleClick.bind(this);

  state: State = {
    state: false,
  };

  handleClick(): void {
    const { useIsMounted: hookIsMounted } = this.props;

    setTimeout(() => {
      if (hookIsMounted.current) {
        this.setState((prevState) => ({ state: !prevState.state }));
      }
    }, 3000);
  }

  render(): JSX.Element {
    const { state } = this.state;

    return (
      <div className={'card'}>
        <button onClick={this._handleClick}>{`click to change state in 3s (withHooks+useIsMounted: ${String(state)})`}</button>
      </div>
    );
  }
}

const HookedThing = withHooks({
  useIsMounted,
  useOnMount: [
    useOnMount,
    [
      (): void => {
        log('mounted');
      },
    ],
  ],
  useOnUnmount: [
    useOnUnmount,
    (props: unknown): Parameters<typeof useOnMount> => [
      (): void => {
        log('unmounted', { props });
      },
    ],
  ],
})(ClassThing);

export default App;
