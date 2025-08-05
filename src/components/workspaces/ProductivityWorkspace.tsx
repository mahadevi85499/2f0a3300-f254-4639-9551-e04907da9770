import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Folder, 
  Brain, 
  Key, 
  ExternalLink,
  Clock
} from "lucide-react";

const ProductivityWorkspace = () => {
  const [projects] = useState([
    { id: 1, name: "Personal Website", status: "active", progress: 75, lastActive: "2 hours ago" },
    { id: 2, name: "Mobile App", status: "planning", progress: 25, lastActive: "1 day ago" },
    { id: 3, name: "Data Analytics", status: "completed", progress: 100, lastActive: "1 week ago" },
  ]);


  const [aiTools] = useState([
    { id: 1, name: "OpenAI GPT-4", status: "configured", usage: "245/500 tokens" },
    { id: 2, name: "Claude 3", status: "configured", usage: "89/200 requests" },
    { id: 3, name: "GitHub Copilot", status: "active", usage: "Unlimited" },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Productivity</h1>
          <p className="text-muted-foreground">Manage your projects, tasks, and AI tools</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-gradient-primary hover:shadow-glow">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects Section */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-card border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-cyber-blue" />
                <h2 className="text-xl font-semibold">Projects</h2>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="p-4 rounded-lg bg-secondary/50 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">{project.name}</h3>
                    <Badge 
                      variant={project.status === "active" ? "default" : project.status === "completed" ? "secondary" : "outline"}
                      className={project.status === "active" ? "bg-cyber-green/20 text-cyber-green" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Last active: {project.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* AI Tools Section */}
        <div className="space-y-6">
          <Card className="p-6 bg-card border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-5 w-5 text-cyber-pink" />
              <h2 className="text-xl font-semibold">AI Tools</h2>
            </div>
            
            <div className="space-y-3">
              {aiTools.map((tool) => (
                <div 
                  key={tool.id}
                  className="p-3 rounded-lg bg-secondary/30 border border-primary/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        tool.status === "active" ? "bg-cyber-green" : "bg-cyber-blue"
                      }`} />
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {tool.usage}
                  </div>
                </div>
              ))}
              
              <Button variant="outline" size="sm" className="w-full">
                <Key className="h-3 w-3 mr-2" />
                Manage API Keys
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductivityWorkspace;