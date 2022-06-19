import React from 'react';
export declare type UseStateSafe<T> = [T, React.Dispatch<React.SetStateAction<T>>];
declare const useStateSafe: <T = unknown>(initialValue?: React.SetStateAction<T> | undefined) => UseStateSafe<T>;
export default useStateSafe;
