import React from 'react';
export declare type WithHooksProps<T, C = unknown> = C & {
    [K in keyof T]: T[K] extends () => unknown ? ReturnType<T[K]> : never;
};
export declare type WithHooksOptions<H> = {
    [Key in keyof H]: H[Key] | [H[Key], ...(H[Key] extends () => unknown ? Parameters<H[Key]> : never)] | {
        hook: H[Key];
        invoke?: (p?: any) => unknown;
        invokeParameters?: (p?: any) => H[Key] extends () => unknown ? Parameters<H[Key]> : never;
        parameters?: H[Key] extends () => unknown ? Parameters<H[Key]> : never;
    };
};
declare type WithHooksHocProps<P, H> = Omit<P, keyof H>;
declare const withHooks: <H>(options: WithHooksOptions<H>) => <C extends React.ComponentType<{}>, P = C extends React.ComponentType<infer I> ? I : never>(Component: React.ComponentType<P>) => (props: WithHooksHocProps<P, H>) => JSX.Element;
export default withHooks;
