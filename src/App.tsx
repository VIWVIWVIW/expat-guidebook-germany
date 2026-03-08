import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComparePage from "./pages/ComparePage";
import ComparisonTablePage from "./pages/ComparisonTablePage";
import GuidePage from "./pages/GuidePage";
import ChecklistPage from "./pages/ChecklistPage";
import FAQPage from "./pages/FAQPage";
import GlossaryPage from "./pages/GlossaryPage";
import CityGuidePage from "./pages/CityGuidePage";
import CalendarPage from "./pages/CalendarPage";
import VacationOverview from "./pages/VacationOverview";
import VacationRegionPage from "./pages/VacationRegionPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import NewsletterPage from "./pages/NewsletterPage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import AffiliateDisclosurePage from "./pages/AffiliateDisclosurePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compare/:category" element={<ComparePage />} />
          <Route path="/compare/:table" element={<ComparisonTablePage />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
          <Route path="/checklists/:slug" element={<ChecklistPage />} />
          <Route path="/faq/:category" element={<FAQPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/cities/:city" element={<CityGuidePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/vacation" element={<VacationOverview />} />
          <Route path="/vacation/:region" element={<VacationRegionPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
