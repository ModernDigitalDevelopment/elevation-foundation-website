import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Philosophy from "./pages/Philosophy";
import OurWork from "./pages/OurWork";
import Transparency from "./pages/Transparency";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Blog from "./pages/Blog";
import DonateSuccess from "./pages/DonateSuccess";
import WhitePapers from "./pages/WhitePapers";
import BlogPost from "./pages/BlogPost";
import AdminBlog from "./pages/AdminBlog";
import AboutFounder from "./pages/AboutFounder";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/our-story" component={OurStory} />
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/transparency" component={Transparency} />
      <Route path="/donate" component={Donate} />
      <Route path="/donate/success" component={DonateSuccess} />
      <Route path="/get-involved" component={GetInvolved} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/admin/blog" component={AdminBlog} />
      <Route path="/white-papers" component={WhitePapers} />
      <Route path="/about/founder" component={AboutFounder} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
