import React from 'react';
export declare type UseStateSafe<T> = [T, React.Dispatch<React.SetStateAction<T>>];
declare const useStateSafe: <T>(initialValue: T) => UseStateSafe<T>;
export default useStateSafe;
