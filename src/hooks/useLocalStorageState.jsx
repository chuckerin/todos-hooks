import { useState, useEffect } from 'react';

function UseLocalStorageState(key, devaultVal) {
    // make piece of state, base off of value in localstorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || String(devaultVal)
            );
        } catch (e) {
            val = devaultVal;
        }
        return val;
    });

    // use useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default UseLocalStorageState;