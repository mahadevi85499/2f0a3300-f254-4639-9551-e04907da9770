import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ExternalLink, 
  Star,
  Clock,
  Tv,
  Music,
  Gamepad2,
  BookOpen
} from "lucide-react";

const EntertainmentWorkspace = () => {
  const streamingServices = [
    { 
      name: "Netflix", 
      url: "#", 
      category: "Movies & TV", 
      status: "active",
      lastWatched: "The Witcher S3",
      icon: Tv,
      color: "cyber-blue"
    },
    { 
      name: "YouTube", 
      url: "#", 
      category: "Videos", 
      status: "active",
      lastWatched: "Tech Reviews",
      icon: Play,
      color: "cyber-purple"
    },
    { 
      name: "Spotify", 
      url: "#", 
      category: "Music", 
      status: "active",
      lastWatched: "Synthwave Playlist",
      icon: Music,
      color: "cyber-green"
    },
    { 
      name: "Steam", 
      url: "#", 
      category: "Gaming", 
      status: "active",
      lastWatched: "Cyberpunk 2077",
      icon: Gamepad2,
      color: "cyber-pink"
    },
    { 
      name: "Audible", 
      url: "#", 
      category: "Audiobooks", 
      status: "active",
      lastWatched: "Atomic Habits",
      icon: BookOpen,
      color: "cyber-blue"
    },
    { 
      name: "Disney+", 
      url: "#", 
      category: "Movies & TV", 
      status: "inactive",
      lastWatched: "The Mandalorian",
      icon: Tv,
      color: "cyber-purple"
    }
  ];

  const recentActivity = [
    { title: "Watched: Dune Part Two", platform: "HBO Max", time: "2 hours ago", progress: 100 },
    { title: "Listening: Midnight City", platform: "Spotify", time: "5 hours ago", progress: 75 },
    { title: "Playing: Baldur's Gate 3", platform: "Steam", time: "1 day ago", progress: 45 },
    { title: "Reading: Project Hail Mary", platform: "Kindle", time: "2 days ago", progress: 67 },
  ];

  const quickActions = [
    { name: "Continue Watching", icon: Play, count: 4 },
    { name: "Watchlist", icon: Star, count: 12 },
    { name: "Downloaded", icon: ExternalLink, count: 8 },
    { name: "Recently Added", icon: Clock, count: 23 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Entertainment</h1>
          <p className="text-muted-foreground">Your streaming services and media</p>
        </div>
        <div className="flex gap-2">
          {quickActions.map((action, index) => (
            <Button key={index} variant="outline" className="flex items-center gap-2">
              <action.icon className="h-4 w-4" />
              <span className="hidden md:inline">{action.name}</span>
              <Badge variant="secondary" className="ml-1">
                {action.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Streaming Services */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-card border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <Tv className="h-5 w-5 text-cyber-blue" />
              <h2 className="text-xl font-semibold">Streaming Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {streamingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-${service.color}/20`}>
                          <Icon className={`h-5 w-5 text-${service.color}`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{service.name}</h3>
                          <p className="text-xs text-muted-foreground">{service.category}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={service.status === "active" ? "default" : "outline"}
                          className={service.status === "active" ? "bg-cyber-green/20 text-cyber-green border-cyber-green/30" : ""}
                        >
                          {service.status}
                        </Badge>
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      Last: {service.lastWatched}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card className="p-6 bg-card border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-cyber-purple" />
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-secondary/30 border border-primary/10"
                >
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">
                      {activity.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activity.platform} • {activity.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-300"
                          style={{ width: `${activity.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {activity.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-card border-primary/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-blue mb-1">24h 32m</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card border-primary/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-purple mb-1">127</div>
            <div className="text-sm text-muted-foreground">Episodes Watched</div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card border-primary/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-green mb-1">45</div>
            <div className="text-sm text-muted-foreground">Games Played</div>
          </div>
        </Card>
        
        <Card className="p-4 bg-card border-primary/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-pink mb-1">8</div>
            <div className="text-sm text-muted-foreground">Books Completed</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EntertainmentWorkspace;