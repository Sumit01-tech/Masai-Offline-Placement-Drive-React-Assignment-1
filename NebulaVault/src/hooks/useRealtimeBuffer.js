import { useRef, useState } from "react";

export function useRealtimeBuffer() {
    const bufferRef = useRef([]);
    const [items, setItems] = useState([]);
    const [hasActivity, setHasActivity] = useState(false);

    const pushUpdate = (newItems, isFrozen) => {
        setHasActivity(true);

        if (isFrozen) {
            bufferRef.current.push(...newItems);
        } else {
            setItems(newItems);
        }
    };
    const flushBuffer = () => {
        if (bufferRef.current.length > 0) {
            setItems(prev => [...prev, ...bufferRef.current]);
            bufferRef.current = [];
        }
        setHasActivity(false);
    };

    const clearActivity = () => {
        setHasActivity(false);
    };

    return {
        items,
        setItems,
        pushUpdate,
        flushBuffer,
        hasActivity,
        clearActivity,
    };
}
