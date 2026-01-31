import { ref, onValue } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";

export function useUniverse(path, pageSize = 10, freeze) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const bufferRef = useRef([]);
    const activityRef = useRef(false);

    useEffect(() => {
        const r = ref(db, path);
        const unsub = onValue(r, snap => {
            const data = snap.val() || {};
            const arr = Object.entries(data).map(([id, v]) => ({
                id,
                ...v
            }));
            activityRef.current = true;
            if (freeze) {
                bufferRef.current = arr;
            } else {
                setItems(arr);
            }
        });

        return () => unsub();
    }, [path, freeze]);

    const flush = () => {
        if (bufferRef.current.length) {
            setItems(bufferRef.current);
            bufferRef.current = [];
        }
        activityRef.current = false;
    };

    const paginated = items.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    return {
        paginated,
        page,
        setPage,
        flush,
        hasActivity: activityRef.current
    };
}
