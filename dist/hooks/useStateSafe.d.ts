import { Dispatch, SetStateAction } from 'react';
export declare type UseStateSafe<T> = [T, Dispatch<SetStateAction<T>>];
declare const useStateSafe: <T = unknown>(initialValue?: SetStateAction<T> | undefined) => UseStateSafe<T>;
export default useStateSafe;
