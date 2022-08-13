# `@drpiou/react-utils`

![Licence](https://img.shields.io/github/license/drpiou/react-utils)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/react-utils)
![Stage](https://img.shields.io/badge/stage-experimental-important)

The `@drpiou/react-utils` package provides some React utilities.

> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Documentation](#documentation)
  - [HOC](#hoc)
    - [withHooks](#withhooks)
  - [Hooks](#hooks)
    - [useIsMounted](#useismounted)
    - [useOnMount](#useonmount)
    - [useOnUnmount](#useonunmount)
    - [useStateSafe](#usestatesafe)
    - [useTimeout](#usetimeout)
  - [Utils](#utils)
    - [getComponentName](#getcomponentname)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/react-utils
```

## Documentation

### HOC

#### `withHooks`

The `withHooks` React HOC wraps the React Class component with React hooks.

```typescript jsx
import {
  useIsMounted,
  useOnMount,
  useOnUnmount,
  withHooks,
  WithHooksProps,
} from '@drpiou/react-utils';

type Props = WithHooksProps<
  {
    useIsMounted: typeof useIsMounted;
    useOnMount: typeof useOnMount;
    useOnUnmount: typeof useOnUnmount;
  },
  HTMLProps<HTMLParagraphElement>
>;

type State = {
  state: boolean;
};

class MyComponent extends Component<Props, State> {
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
        <button
          onClick={this._handleClick}
        >{`click to change state in 3s (withHooks+useIsMounted: ${String(
          state,
        )})`}</button>
      </div>
    );
  }
}

const MyComponentWithHooks = withHooks({
  useIsMounted,
  useOnMount: [
    useOnMount,
    [
      (): void => {
        console.log('mounted');
      },
    ],
  ],
  useOnUnmount: [
    useOnUnmount,
    (props: unknown): Parameters<typeof useOnMount> => [
      (): void => {
        console.log('unmounted', { props });
      },
    ],
  ],
})(MyComponent);
```

### Hooks

#### `useIsMounted`

The `useIsMounted` React hook provides the mounted state of the component.

```typescript jsx
import { useIsMounted } from '@drpiou/react-utils';

const MyComponent = (): JSX.Element => {
  const isMounted = useIsMounted();

  const [state, setState] = React.useState<boolean>(false);

  const handleClick = (): void => {
    if (isMounted.current) {
      setState((prevState) => !prevState);
    }
  };

  return <div onClick={handleClick} />;
};
```

#### `useOnMount`

The `useOnMount` React hook execute a callback once when the component is mounted.

```typescript jsx
import { useOnMount } from '@drpiou/react-utils';

const MyComponent = (): JSX.Element => {
  useOnMount(() => {
    console.log('Mounted');
  });

  return <></>;
};
```

#### `useOnUnmount`

The `useOnUnmount` React hook execute a callback once when the component is unmounted.

```typescript jsx
import { useOnUnmount } from '@drpiou/react-utils';

const MyComponent = (): JSX.Element => {
  useOnUnmount(() => {
    console.log('Unmounted');
  });

  return <></>;
};
```

#### `useStateSafe`

The `useStateSafe` React hook prevents the `useState` React hook to execute if the component is unmounted.

```typescript jsx
import { useStateSafe } from '@drpiou/react-utils';

const MyComponent = (): JSX.Element => {
  const [state, setState] = useStateSafe<boolean>(false);

  const handleClick = (): void => {
    setState((prevState) => !prevState);
  };

  return <div onClick={handleClick} />;
};
```

#### `useTimeout`

The `useTimeout` React hook wraps the `setTimeout` and `clearTimeout` functions.

> It clears automatically the timeout when the component is unmounted.

```typescript jsx
import { useTimeout } from '@drpiou/react-utils';

const MyComponent = (): JSX.Element => {
  const [state, setState] = React.useState<boolean>(false);

  const timeout = useTimeout();

  const handleClick = (): void => {
    timeout.set(() => {
      setState((prevState) => !prevState);
    }, 1000);
  };

  return <div onClick={handleClick} />;
};
```

### Utils

#### `getComponentName`

The `getComponentName` utility returns the component name or undefined.

> It clears automatically the timeout when the component is unmounted.

```typescript
import { getComponentName } from '@drpiou/react-utils';

const result = getComponentName(MyComponent);

// => 'MyComponent'
```
