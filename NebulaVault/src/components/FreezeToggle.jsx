export default function FreezeToggle({ freeze, setFreeze, onFlush }) {
    return (
        <button
            onClick={() => {
                if (freeze) onFlush();
                setFreeze(!freeze);
            }}
        >
            {freeze ? "⏸ Frozen" : "▶ Flowing"}
        </button>
    );
}
