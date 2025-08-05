import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Image, 
  Video, 
  Music, 
  Folder,
  ExternalLink,
  Download,
  Star,
  Clock
} from "lucide-react";

const VisualsWorkspace = () => {
  const imageTools = [
    { name: "Photoshop", url: "#", category: "Editor", rating: 5, lastUsed: "Today" },
    { name: "Figma", url: "#", category: "Design", rating: 5, lastUsed: "Yesterday" },
    { name: "Canva", url: "#", category: "Templates", rating: 4, lastUsed: "3 days ago" },
    { name: "GIMP", url: "#", category: "Editor", rating: 4, lastUsed: "1 week ago" },
  ];

  const videoTools = [
    { name: "After Effects", url: "#", category: "Motion", rating: 5, lastUsed: "Today" },
    { name: "Premiere Pro", url: "#", category: "Editor", rating: 5, lastUsed: "Yesterday" },
    { name: "DaVinci Resolve", url: "#", category: "Color", rating: 4, lastUsed: "2 days ago" },
    { name: "Blender", url: "#", category: "3D", rating: 4, lastUsed: "1 week ago" },
  ];

  const audioTools = [
    { name: "Audacity", url: "#", category: "Editor", rating: 4, lastUsed: "3 days ago" },
    { name: "Logic Pro", url: "#", category: "DAW", rating: 5, lastUsed: "1 week ago" },
    { name: "Spotify", url: "#", category: "Streaming", rating: 5, lastUsed: "Today" },
  ];

  const recentFiles = [
    { name: "project_banner.psd", type: "image", size: "24.5 MB", modified: "2 hours ago" },
    { name: "intro_video.mp4", type: "video", size: "156 MB", modified: "5 hours ago" },
    { name: "background_music.wav", type: "audio", size: "12.8 MB", modified: "1 day ago" },
    { name: "logo_variations.ai", type: "image", size: "8.2 MB", modified: "2 days ago" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? "fill-cyber-purple text-cyber-purple" : "text-muted-foreground"}`} 
      />
    ));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image": return <Image className="h-4 w-4 text-cyber-blue" />;
      case "video": return <Video className="h-4 w-4 text-cyber-purple" />;
      case "audio": return <Music className="h-4 w-4 text-cyber-green" />;
      default: return <Folder className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Visuals</h1>
          <p className="text-muted-foreground">Creative tools and media management</p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow">
          <Folder className="h-4 w-4 mr-2" />
          Open Output Folder
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Image Tools */}
        <Card className="p-6 bg-card border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Image className="h-5 w-5 text-cyber-blue" />
            <h2 className="text-xl font-semibold">Image Tools</h2>
          </div>
          
          <div className="space-y-3">
            {imageTools.map((tool, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{tool.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {renderStars(tool.rating)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {tool.lastUsed}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Video Tools */}
        <Card className="p-6 bg-card border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Video className="h-5 w-5 text-cyber-purple" />
            <h2 className="text-xl font-semibold">Video Tools</h2>
          </div>
          
          <div className="space-y-3">
            {videoTools.map((tool, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{tool.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {renderStars(tool.rating)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {tool.lastUsed}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Audio Tools */}
        <Card className="p-6 bg-card border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <Music className="h-5 w-5 text-cyber-green" />
            <h2 className="text-xl font-semibold">Audio Tools</h2>
          </div>
          
          <div className="space-y-3">
            {audioTools.map((tool, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{tool.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {renderStars(tool.rating)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {tool.lastUsed}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Files */}
      <Card className="p-6 bg-card border-primary/20">
        <div className="flex items-center gap-2 mb-4">
          <Folder className="h-5 w-5 text-cyber-blue" />
          <h2 className="text-xl font-semibold">Recent Files</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentFiles.map((file, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                {getFileIcon(file.type)}
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="h-3 w-3" />
                </Button>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm font-medium truncate">{file.name}</div>
                <div className="text-xs text-muted-foreground">{file.size}</div>
                <div className="text-xs text-muted-foreground">{file.modified}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VisualsWorkspace;