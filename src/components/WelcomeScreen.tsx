import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Zap } from "lucide-react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <Card className="w-full max-w-2xl p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow relative text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-gradient-primary p-6 rounded-full">
                <Zap className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {getGreeting()}, Uday
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Welcome back to your workspace
          </p>
          
          <div className="flex items-center justify-center gap-2 text-cyber-blue">
            <Clock className="h-5 w-5" />
            <span className="text-lg font-mono">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyber-blue">8.5h</div>
              <div className="text-sm text-muted-foreground">Yesterday's Activity</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyber-purple">12</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="text-2xl font-bold text-cyber-green">94%</div>
              <div className="text-sm text-muted-foreground">Productivity Score</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Loading workspace...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeScreen;