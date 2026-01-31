export default function ActivityPulse({ active }) {
    return (
        <span
            style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: active ? "lime" : "gray",
                boxShadow: active ? "0 0 8px lime" : "none"
            }}
        />
    );
}
