/* eslint-disable @typescript-eslint/no-explicit-any */

import castArray from 'lodash/castArray';
import reduce from 'lodash/reduce';
import React, { ComponentType } from 'react';
import getComponentName from '../utils/getComponentName';

export type WithHooksProps<T extends WithHook<T>, C = unknown> = C & {
  [K in keyof T]: T[K] extends (...args: any) => infer I ? I : never;
};

export type WithHooksOptions<H> = {
  [Key in keyof H]: H[Key] extends (...args: any) => any
    ? H[Key]
    : H[Key] extends [infer F, unknown[]]
    ? [F, F extends (...args: infer I) => any ? I : never]
    : H[Key] extends [infer F, (props: unknown) => unknown]
    ? [F, F extends (...args: infer I) => any ? (props: unknown) => I : never]
    : never;
};

type WithHook<T> = {
  [K in keyof T]: (...args: any) => any;
};

type WithHookOption<H> = {
  [Key in keyof H]:
    | ((...args: any) => any)
    | [(...args: any) => any, unknown[]]
    | [(...args: any) => any, (props: unknown) => unknown];
};

type WithHooksHocProps<P, H> = Omit<P, keyof H>;

export const withHooks = <H extends WithHookOption<H>>(
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
            if (Array.isArray(option)) {
              hookCallback = option[0];

              if (Array.isArray(option[1])) {
                hookParameters = option[1];
              } else if (typeof option[1] === 'function') {
                hookParameters = (option[1] as (props: unknown) => unknown)(props);
              }
            } else {
              hookCallback = option;
            }
          }

          if (typeof hookCallback !== 'function') {
            throw new Error(`The hook is not a function. Happened in ${WithComponent.displayName || 'undefined'}`);
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
