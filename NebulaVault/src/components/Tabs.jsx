import { useEffect } from "react";
import ActivityPulse from "./ActivityPulse";

const UNIVERSES = ["artifacts", "creatures", "logs"];

export default function Tabs({ activeTab, setActiveTab, activityMap }) {
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    return (
        <div style={{ display: "flex", gap: "12px" }}>
            {UNIVERSES.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                        padding: "8px 16px",
                        borderBottom: activeTab === tab ? "2px solid cyan" : "none"
                    }}
                >
                    {tab.toUpperCase()}
                    <ActivityPulse active={activityMap[tab]} />
                </button>
            ))}
        </div>
    );
}
