import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock, Shield } from "lucide-react";

interface MasterPasswordScreenProps {
  onAuthenticated: () => void;
}

const MasterPasswordScreen = ({ onAuthenticated }: MasterPasswordScreenProps) => {
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;

    setIsAuthenticating(true);
    
    // Simulate password validation
    setTimeout(() => {
      // For demo purposes, accept any password
      setIsAuthenticating(false);
      onAuthenticated();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <Card className="w-full max-w-md p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-glow relative">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              <div className="relative bg-gradient-primary p-4 rounded-full">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Uday's Workspace
          </h1>
          <p className="text-muted-foreground">Enter your master password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="password"
              placeholder="Master Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 h-12 bg-input/50 border-primary/20 focus:border-primary focus:ring-primary/20 transition-glow"
              disabled={isAuthenticating}
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-glow"
            disabled={!password || isAuthenticating}
          >
            {isAuthenticating ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Authenticating...
              </div>
            ) : (
              "Unlock Workspace"
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Protected by AES-256 encryption
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MasterPasswordScreen;