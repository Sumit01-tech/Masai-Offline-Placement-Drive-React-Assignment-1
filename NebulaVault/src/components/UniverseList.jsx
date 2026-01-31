import { useRef, useEffect } from "react";

export default function UniverseList({ items, page, onNext, onPrev, tab }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const pos = localStorage.getItem(`scroll-${tab}`);
        if (pos && containerRef.current) {
            containerRef.current.scrollTop = Number(pos);
        }
    }, [tab]);

    const handleScroll = () => {
        localStorage.setItem(
            `scroll-${tab}`,
            containerRef.current.scrollTop
        );
    };

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            style={{
                height: "300px",
                overflowY: "auto",
                border: "1px solid #333",
                padding: "10px"
            }}
        >
            {items.map(item => (
                <div key={item.id} style={{ padding: "6px" }}>
                    {item.name || JSON.stringify(item)}
                </div>
            ))}

            <div style={{ marginTop: "10px" }}>
                <button onClick={onPrev} disabled={page === 1}>
                    Prev
                </button>
                <span style={{ margin: "0 10px" }}>Page {page}</span>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    );
}
