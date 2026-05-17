import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Eagerly loaded — tiny, always needed
import NotFound from "@/pages/NotFound";

// Lazy-loaded pages — split into separate chunks to reduce main bundle
const Home = lazy(() => import("./pages/Home"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Philosophy = lazy(() => import("./pages/Philosophy"));
const SotilitarianismPage = lazy(() => import("./pages/Sotilitarianism"));
const OurWork = lazy(() => import("./pages/OurWork"));
const WeSolar = lazy(() => import("./pages/WeSolar"));
const Transparency = lazy(() => import("./pages/Transparency"));
const Donate = lazy(() => import("./pages/Donate"));
const DonateSuccess = lazy(() => import("./pages/DonateSuccess"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SotilitarianCapitalismSeries = lazy(() => import("./pages/SotilitarianCapitalismSeries"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const WhitePapers = lazy(() => import("./pages/WhitePapers"));
const AboutFounder = lazy(() => import("./pages/AboutFounder"));
const Press = lazy(() => import("./pages/Press"));
const TokenEconomy = lazy(() => import("./pages/TokenEconomy"));
const Capitalism2 = lazy(() => import("./pages/Capitalism2"));
const ForFunders = lazy(() => import("./pages/ForFunders"));

// Minimal page-level loading fallback — matches dark navy background
function PageLoader() {
  return (
    <div className="min-h-screen bg-[oklch(0.12_0.05_265)] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[oklch(0.72_0.12_75)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* Core pages */}
        <Route path="/" component={Home} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/philosophy" component={Philosophy} />
        <Route path="/sotilitarianism" component={SotilitarianismPage} />
        <Route path="/our-work" component={OurWork} />
        <Route path="/wesolar" component={WeSolar} />
        <Route path="/transparency" component={Transparency} />
        <Route path="/donate" component={Donate} />
        <Route path="/donate/success" component={DonateSuccess} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/series/sotilitarian-capitalism" component={SotilitarianCapitalismSeries} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/admin/blog" component={AdminBlog} />
        <Route path="/white-papers" component={WhitePapers} />
        <Route path="/about/founder" component={AboutFounder} />
        <Route path="/press" component={Press} />
        <Route path="/token-economy" component={TokenEconomy} />
        <Route path="/capitalism-2-0" component={Capitalism2} />
        <Route path="/for-funders" component={ForFunders} />

        {/* Redirect common 404s */}
        <Route path="/about">
          <Redirect to="/about/founder" />
        </Route>
        <Route path="/projects">
          <Redirect to="/our-work" />
        </Route>
        <Route path="/governance">
          <Redirect to="/philosophy#governance" />
        </Route>
        <Route path="/tokens">
          <Redirect to="/token-economy" />
        </Route>
        <Route path="/sogood">
          <Redirect to="/philosophy#governance" />
        </Route>

        {/* 404 */}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
