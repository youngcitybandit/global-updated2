
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Employers from "./pages/Employers";
import EmployersFAQs from "./pages/EmployersFAQs";
import Brokers from "./pages/Brokers";
import BrokersFAQs from "./pages/BrokersFAQs";
import AboutCompany from "./pages/AboutCompany";
import AboutTeam from "./pages/AboutTeam";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/employers/faqs" element={<EmployersFAQs />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/brokers/faqs" element={<BrokersFAQs />} />
          <Route path="/about/company" element={<AboutCompany />} />
          <Route path="/about/team" element={<AboutTeam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
