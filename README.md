# `@drpiou/react-utils`

![GitHub](https://img.shields.io/github/license/drpiou/react-utils)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-utils)
![Jest tests](https://img.shields.io/badge/passed%20test-5-green)
![Jest tests](https://img.shields.io/badge/stage-experimental-important)
![GitHub all releases](https://img.shields.io/github/downloads/drpiou/react-utils/total)

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

The `withHooks` React HOC wraps the component with React hooks.

> It can be used to wrap React hooks around React class components.

```typescript jsx
import { HookedProps, useIsMounted, withHooks } from '@drpiou/react-utils';

export type HookedTextProps = HookedProps<
  { useIsMounted: typeof useIsMounted },
  HTMLParagraphElement
>;

type State = {
  toggle: boolean;
};

class HookedText extends React.Component<HookedTextProps, State> {
  _handleClick = this.handleClick.bind(this);

  state: State = {
    toggle: false,
  };

  handleClick(): void {
    const { useIsMounted } = this.props;

    if (useIsMounted.current) {
      this.setState((prevState) => ({ toggle: !prevState.toggle }));
    }
  }

  render(): JSX.Element {
    return <div onClick={this._handleClick} />;
  }
}

export default withHooks({ useIsMounted })(HookedText);

// export default withHooks({ [prop]: useIsMounted })(HookedText);

// export default withHooks({ [prop]: [useIsMounted, ...arguments] })(HookedText);

// export default withHooks({ [prop]: { hook: useIsMounted, invoque: (props) => [...arguments] <-- this one is not typechecked } })(HookedText);
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

```typescript jsx
import { getComponentName } from '@drpiou/react-utils';

const result = getComponentName(MyComponent);

// => 'MyComponent'
```
