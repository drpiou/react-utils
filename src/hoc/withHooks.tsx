import castArray from 'lodash/castArray';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';
import React from 'react';
import getComponentName from '../utils/getComponentName';

export type WithHooksProps<T, C = unknown> = C & {
  [K in keyof T]: T[K] extends () => unknown ? ReturnType<T[K]> : never;
};

export type WithHooksOptions<H> = {
  [Key in keyof H]:
    | H[Key]
    | [H[Key], ...(H[Key] extends () => unknown ? Parameters<H[Key]> : never)]
    | {
        hook: H[Key];
        invoke?: (p?: any) => unknown;
        // invokeParameters?: (p?: any) => H[Key] extends () => unknown ? Parameters<H[Key]> : never;
        parameters?: H[Key] extends () => unknown ? Parameters<H[Key]> : never;
      };
};

type WithHooksHocProps<P, H> = Omit<P, keyof H>;

export const withHooks = <H,>(
  options: WithHooksOptions<H>,
): (<C extends React.ComponentType, P = C extends React.ComponentType<infer I> ? I : never>(
  Component: React.ComponentType<P>,
) => (props: WithHooksHocProps<P, H>) => JSX.Element) => {
  return ((Component: React.ComponentType): React.ComponentType => {
    const WithComponent = (props: unknown): JSX.Element => {
      const results = reduce(
        options,
        (acc, option, name) => {
          const hookOption: any = option;

          const hookOptionType: 'array' | 'object' | null =
            (hookOption && (Array.isArray(hookOption) ? 'array' : isPlainObject(hookOption) && 'object')) || null;

          const hookCallback =
            hookOptionType === 'array'
              ? hookOption[0]
              : hookOptionType === 'object' && 'hook' in hookOption
              ? hookOption.hook
              : hookOption;

          if (typeof hookCallback !== 'function') {
            throw new Error(`The hook is not a function. Happened in ${getComponentName(Component) || 'undefined'}`);
          }

          const hookParameters =
            hookOptionType === 'array'
              ? hookOption.slice(1)
              : hookOptionType === 'object'
              ? 'parameters' in hookOption
                ? hookOption.parameters
                : 'invoke' in hookOption && typeof hookOption.invoke === 'function'
                ? hookOption.invoke(props)
                : 'invokeParameters' in hookOption && typeof hookOption.invokeParameters === 'function'
                ? hookOption.invokeParameters(props)
                : undefined
              : undefined;

          acc[name] = hookCallback(...castArray(hookParameters));

          return acc;
        },
        {} as Record<string, unknown>,
      );

      return <Component {...(props as any)} {...results} />;
    };

    WithComponent.displayName = getComponentName(Component);

    return WithComponent;
  }) as never;
};

export default withHooks;
