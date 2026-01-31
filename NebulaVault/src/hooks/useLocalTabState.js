import { useState, useEffect } from "react";

export function useLocalTabState(key, initial) {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
