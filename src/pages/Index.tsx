import { useState, useEffect } from "react";
import MasterPasswordScreen from "@/components/MasterPasswordScreen";
import WelcomeScreen from "@/components/WelcomeScreen";
import WorkspaceApp from "./WorkspaceApp";

type AppState = "login" | "welcome" | "workspace";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("login");

  const handleAuthenticated = () => {
    setAppState("welcome");
  };

  const handleWelcomeComplete = () => {
    setAppState("workspace");
  };

  useEffect(() => {
    // Remove the fallback body styles from App.css
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  switch (appState) {
    case "login":
      return <MasterPasswordScreen onAuthenticated={handleAuthenticated} />;
    case "welcome":
      return <WelcomeScreen onComplete={handleWelcomeComplete} />;
    case "workspace":
      return <WorkspaceApp />;
    default:
      return <MasterPasswordScreen onAuthenticated={handleAuthenticated} />;
  }
};

export default Index;
