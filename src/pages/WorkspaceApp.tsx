import { useState } from "react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import ProductivityWorkspace from "@/components/workspaces/ProductivityWorkspace";
import VisualsWorkspace from "@/components/workspaces/VisualsWorkspace";
import EntertainmentWorkspace from "@/components/workspaces/EntertainmentWorkspace";
import ScratchpadWorkspace from "@/components/workspaces/ScratchpadWorkspace";

const WorkspaceApp = () => {
  const [activeWorkspace, setActiveWorkspace] = useState("productivity");

  const renderWorkspace = () => {
    switch (activeWorkspace) {
      case "productivity":
        return <ProductivityWorkspace />;
      case "visuals":
        return <VisualsWorkspace />;
      case "entertainment":
        return <EntertainmentWorkspace />;
      case "scratchpad":
        return <ScratchpadWorkspace />;
      default:
        return <ProductivityWorkspace />;
    }
  };

  return (
    <div className="h-screen bg-background flex">
      <WorkspaceSidebar 
        activeWorkspace={activeWorkspace}
        onWorkspaceChange={setActiveWorkspace}
      />
      <div className="flex-1 overflow-auto">
        {renderWorkspace()}
      </div>
    </div>
  );
};

export default WorkspaceApp;