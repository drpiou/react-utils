import castArray from 'lodash/castArray';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';
import React, { ComponentType } from 'react';
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
        parameters?: H[Key] extends () => unknown ? Parameters<H[Key]> : never;
      };
};

type WithHooksHocProps<P, H> = Omit<P, keyof H>;

export const withHooks = <H,>(
  options: WithHooksOptions<H>,
): (<C extends ComponentType, P = C extends ComponentType<infer I> ? I : never>(
  Component: ComponentType<P>,
) => (props: WithHooksHocProps<P, H>) => JSX.Element) => {
  return ((Component: ComponentType): ComponentType => {
    const WithComponent = (props: unknown): JSX.Element => {
      const results = reduce(
        options,
        (acc, option, name) => {
          let hookCallback: unknown;
          let hookParameters: unknown;

          if (option) {
            if (typeof option === 'object') {
              if (Array.isArray(option)) {
                hookCallback = option[0];
                hookParameters = option.slice(1);
              } else if (isPlainObject(option)) {
                const objectOptions: {
                  hook: unknown;
                  invoke?: unknown;
                  parameters?: unknown;
                } = options as never;

                if ('hook' in objectOptions) {
                  hookCallback = objectOptions.hook;
                }

                if ('parameters' in objectOptions) {
                  hookParameters = objectOptions.parameters;
                } else if ('invoke' in objectOptions && typeof objectOptions.invoke === 'function') {
                  hookParameters = objectOptions.invoke;
                }
              }
            } else {
              hookCallback = option;
            }
          }

          if (typeof hookCallback !== 'function') {
            throw new Error(`The hook is not a function. Happened in ${getComponentName(Component) || 'undefined'}`);
          }

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
