import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
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
import SotilitarianismPage from "./pages/Sotilitarianism";
import WeSolar from "./pages/WeSolar";
import SotilitarianCapitalismSeries from "./pages/SotilitarianCapitalismSeries";
import Press from "./pages/Press";
import TokenEconomy from "./pages/TokenEconomy";
import Capitalism2 from "./pages/Capitalism2";
import ForFunders from "./pages/ForFunders";

function Router() {
  return (
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
      <Route path="/for-funders" component={ForFunders} />

      {/* 404 */}
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
