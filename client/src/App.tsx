import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";

// CP Admin Components
import CpAdminLayout from "@/pages/cp-admin/layout";
import CpDashboard from "@/pages/cp-admin/dashboard";
import CpLeads from "@/pages/cp-admin/leads";
import CpRunAds from "@/pages/cp-admin/ads";
import CpMarketingSupport from "@/pages/cp-admin/marketing";
import CpProfile from "@/pages/cp-admin/profile";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      
      {/* CP Admin Routes */}
      <Route path="/cp-dashboard*">
        <CpAdminLayout>
          <Switch>
            <Route path="/cp-dashboard" component={CpDashboard} />
            <Route path="/cp-dashboard/leads" component={CpLeads} />
            <Route path="/cp-dashboard/ads" component={CpRunAds} />
            <Route path="/cp-dashboard/marketing" component={CpMarketingSupport} />
            <Route path="/cp-dashboard/profile" component={CpProfile} />
            <Route component={NotFound} />
          </Switch>
        </CpAdminLayout>
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
