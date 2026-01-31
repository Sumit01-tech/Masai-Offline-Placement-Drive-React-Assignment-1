import { ref, push } from "firebase/database";
import { db } from "../firebase";
import { useRef } from "react";

export function useOfflineQueue(path) {
    const queue = useRef([]);
    const add = item => {
        if (navigator.onLine) {
            push(ref(db, path), item);
        } else {
            queue.current.push(item);
        }
    };
    window.addEventListener("online", () => {
        queue.current.forEach(i =>
            push(ref(db, path), i)
        );
        queue.current = [];
    });

    return add;
}
