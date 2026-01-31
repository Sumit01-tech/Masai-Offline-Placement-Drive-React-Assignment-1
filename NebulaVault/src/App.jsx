import { useState, useEffect } from "react";
import { useUniverse } from "./hooks/useUniverse";
import FreezeToggle from "./components/FreezeToggle";
import Tabs from "./components/Tabs";
import UniverseList from "./components/UniverseList";

export default function App() {
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem("activeTab") || "artifacts"
  );
  const [freeze, setFreeze] = useState(false);
  const universe = useUniverse(activeTab, 5, freeze);

  useEffect(() => {
    const savedPage = localStorage.getItem(`page-${activeTab}`);
    if (savedPage) universe.setPage(Number(savedPage));
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem(`page-${activeTab}`, universe.page);
  }, [activeTab, universe.page]);

  return (
    <div style={{ padding: 20 }}>
      <h2>🌌 NebulaVault</h2>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activityMap={{
          artifacts: universe.hasActivity,
          creatures: false,
          logs: false,
        }}
      />
      <FreezeToggle
        freeze={freeze}
        setFreeze={setFreeze}
        onFlush={universe.flush}
      />
      <UniverseList
        items={universe.paginated}
        page={universe.page}
        tab={activeTab}
        onNext={() => universe.setPage(p => p + 1)}
        onPrev={() => universe.setPage(p => Math.max(1, p - 1))}
      />
    </div>
  );
}
