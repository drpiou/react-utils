import React, { ComponentProps, ComponentType } from 'react';
export declare type WithHooksProps<T extends WithHook<T>, C = unknown> = C & {
    [K in keyof T]: T[K] extends (...args: any) => infer I ? I : never;
};
export declare type WithHooksOptions<H> = {
    [Key in keyof H]: H[Key] extends (...args: any) => any ? H[Key] : H[Key] extends [infer F, unknown[]] ? [F, F extends (...args: infer I) => any ? I : never] : H[Key] extends [infer F, (props: unknown) => unknown] ? [F, F extends (...args: infer I) => any ? (props: unknown) => I : never] : never;
};
declare type WithHook<T> = {
    [K in keyof T]: (...args: any) => any;
};
declare type WithHookOption<H> = {
    [Key in keyof H]: ((...args: any) => any) | [(...args: any) => any, unknown[]] | [(...args: any) => any, (props: unknown) => unknown];
};
declare type WithHooksHocProps<P, H> = Omit<P, keyof H>;
export declare const withHooks: <H extends WithHookOption<H>>(options: WithHooksOptions<H>) => <C extends React.ComponentType<{}>, P = React.ComponentProps<C>>(Component: React.ComponentType<P>) => (props: WithHooksHocProps<P, H>) => JSX.Element;
export default withHooks;
