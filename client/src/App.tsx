import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login";
import DeveloperDashboard from "@/pages/DeveloperDashboard";

// CP Admin Components
import CpAdminLayout from "@/pages/cp-admin/layout";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/developer-dashboard" component={DeveloperDashboard} />
      
      {/* CP Admin Routes */}
      <Route path="/cp-dashboard">
        <CpAdminLayout />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
