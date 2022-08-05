export declare type UseTimeoutSet = (callback: () => void, time: number) => void;
export declare type UseTimeoutReset = (callback: () => void, time: number) => void;
export declare type UseTimeoutClear = () => void;
export declare type UseTimeout = {
    set: UseTimeoutSet;
    reset: UseTimeoutReset;
    clear: UseTimeoutClear;
};
declare const useTimeout: () => UseTimeout;
export default useTimeout;
