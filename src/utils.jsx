import { useEffect, useState } from 'react';

export const useLocalState = (value, key) =>{
    const [value, setValue] = useState(() =>{
        const localStorageValue = localStorage.getItem(key);
        return localSotrage !== null ? JSON.parse(localStorageValue) : value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value, key]);

    return [value, setValue];
}