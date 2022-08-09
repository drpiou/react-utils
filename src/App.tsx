import React, { HTMLProps } from 'react';
import { useIsMounted, useOnMount, useOnUnmount, useStateSafe, useTimeout, withHooks, WithHooksProps } from '../lib';
import './App.css';

const App = (): JSX.Element => {
  const [state, setState] = React.useState<boolean>(false);

  const handleClick = (): void => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClick}>mount/unmount</button>
      </div>

      {state && (
        <>
          <Thing />
          <HookedThing />
        </>
      )}
    </div>
  );
};

const Thing = (): JSX.Element => {
  useOnMount(() => {
    alert('mounted');
  });

  useOnUnmount(() => {
    alert('unmounted');
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
    <div className="card">
      <button onClick={handleClickSafe}>{`click to change state in 3s (useStateSafe: ${String(state)})`}</button>
      <br />
      <button onClick={handleClickTimeout}>{`click to change state in 3s (useTimeout: ${String(state)})`}</button>
    </div>
  );
};

type Props = WithHooksProps<
  {
    useIsMounted: typeof useIsMounted;
  },
  HTMLProps<HTMLParagraphElement>
>;

type State = {
  state: boolean;
};

class ClassThing extends React.Component<Props, State> {
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
      <div className="card">
        <button onClick={this._handleClick}>{`click to change state in 3s (withHooks+useIsMounted: ${String(state)})`}</button>
      </div>
    );
  }
}

const HookedThing = withHooks({ useIsMounted })(ClassThing);

export default App;
