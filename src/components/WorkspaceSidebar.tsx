import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Palette, 
  Film, 
  FileText, 
  Settings,
  Monitor,
  Cpu,
  HardDrive,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface WorkspaceSidebarProps {
  activeWorkspace: string;
  onWorkspaceChange: (workspace: string) => void;
}

const workspaces = [
  { id: "productivity", name: "Productivity", icon: Briefcase, color: "cyber-blue" },
  { id: "visuals", name: "Visuals", icon: Palette, color: "cyber-purple" },
  { id: "entertainment", name: "Entertainment", icon: Film, color: "cyber-pink" },
  { id: "scratchpad", name: "Scratchpad", icon: FileText, color: "cyber-green" },
];

const WorkspaceSidebar = ({ activeWorkspace, onWorkspaceChange }: WorkspaceSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-sidebar border-r border-sidebar-border transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-72'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div>
                <h2 className="text-lg font-semibold text-sidebar-foreground">Workspace</h2>
                <p className="text-sm text-muted-foreground">Uday Kumar</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Workspaces */}
        <div className="flex-1 p-4 space-y-2">
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;
            const isActive = activeWorkspace === workspace.id;
            
            return (
              <Button
                key={workspace.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-12 ${
                  isActive 
                    ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                } ${isCollapsed ? 'px-2' : 'px-4'}`}
                onClick={() => onWorkspaceChange(workspace.id)}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span>{workspace.name}</span>}
              </Button>
            );
          })}
        </div>

        {/* System Monitor */}
        {!isCollapsed && (
          <div className="p-4 space-y-4">
            <Card className="p-4 bg-sidebar-accent/50 border-sidebar-border">
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="h-4 w-4 text-cyber-blue" />
                <span className="text-sm font-medium text-sidebar-foreground">System</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <div className="flex items-center gap-1">
                      <Cpu className="h-3 w-3 text-cyber-purple" />
                      <span>CPU</span>
                    </div>
                    <span>34%</span>
                  </div>
                  <Progress value={34} className="h-1.5" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <div className="flex items-center gap-1">
                      <HardDrive className="h-3 w-3 text-cyber-green" />
                      <span>RAM</span>
                    </div>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-1.5" />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">Uday Kumar</p>
                <p className="text-xs text-muted-foreground">Administrator</p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;