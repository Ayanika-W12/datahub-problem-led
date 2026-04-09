import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlatformVertical from './pages/PlatformVertical';
import Solutions from './pages/Solutions';
import SolutionPage from './pages/SolutionPage';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ComparisonPage from './pages/ComparisonPage';
import BuildVsBuy from './pages/BuildVsBuy';
import Webinar from './pages/Webinar';
import VorroForStartups from './pages/VorroForStartups';
import SimplePage from './pages/SimplePage';
import IndustryPage from './pages/IndustryPage';
import UseCasePage from './pages/UseCasePage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />

        {/* Platform Verticals */}
        <Route path="/platform/analytics-nlp" element={<PlatformVertical slug="analytics-nlp" />} />
        <Route path="/platform/reporting-nlp" element={<PlatformVertical slug="reporting-nlp" />} />
        <Route path="/platform/governance-compliance" element={<PlatformVertical slug="governance-compliance" />} />
        <Route path="/platform/governance-versioning" element={<PlatformVertical slug="governance-versioning" />} />
        <Route path="/platform/interfacing" element={<PlatformVertical slug="interfacing" />} />
        <Route path="/platform/ai-readiness" element={<PlatformVertical slug="ai-readiness" />} />
        <Route path="/platform/workflow-orchestration" element={<PlatformVertical slug="workflow-orchestration" />} />

        {/* Solution Sub-pages */}
        <Route path="/solutions/emr-integrations" element={<SolutionPage slug="emr-integrations" />} />
        <Route path="/solutions/hie-integrations" element={<SolutionPage slug="hie-integrations" />} />
        <Route path="/solutions/payer-integrations" element={<SolutionPage slug="payer-integrations" />} />
        <Route path="/solutions/pharmacy-integrations" element={<SolutionPage slug="pharmacy-integrations" />} />
        <Route path="/solutions/data-quality" element={<SolutionPage slug="data-quality" />} />
        <Route path="/solutions/data-lake" element={<SolutionPage slug="data-lake" />} />
        <Route path="/solutions/pipeline-auto-healing" element={<SolutionPage slug="pipeline-auto-healing" />} />
        <Route path="/solutions/data-management" element={<SolutionPage slug="data-management" />} />
        {/* Industry pages */}
        <Route path="/solutions/healthcare" element={<IndustryPage industry="healthcare" />} />
        <Route path="/solutions/ecommerce" element={<IndustryPage industry="ecommerce" />} />
        <Route path="/solutions/insurance" element={<IndustryPage industry="insurance" />} />

        {/* Use Case pages */}
        <Route path="/solutions/use-case/340b-compliance-without-the-roadblocks" element={<UseCasePage slug="340b" />} />
        <Route path="/solutions/use-case/behavioral-health-integration-without-the-barriers" element={<UseCasePage slug="behavioral-health" />} />

        <Route path="/solutions/*" element={<Solutions />} />

        {/* Resources */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/build-vs-buy" element={<BuildVsBuy />} />

        {/* Use Cases / Audiences */}
        <Route path="/vorro-for-startups" element={<VorroForStartups />} />

        {/* Comparisons */}
        <Route path="/vorro-vs-redox" element={<ComparisonPage competitor="redox" />} />
        <Route path="/vorro-vs-mulesoft" element={<ComparisonPage competitor="mulesoft" />} />
        <Route path="/vorro-vs-rhapsody" element={<ComparisonPage competitor="rhapsody" />} />
        <Route path="/vorro-vs-datavant" element={<ComparisonPage competitor="datavant" />} />

        {/* Company */}
        <Route path="/company/careers" element={<SimplePage page="careers" />} />
        <Route path="/partners" element={<SimplePage page="partners" />} />
        <Route path="/press-releases" element={<SimplePage page="press" />} />
        <Route path="/company/privacy-policy" element={<SimplePage page="privacy" />} />

        {/* AI Platform overview */}
        <Route path="/healthcare-ai-platform" element={<SimplePage page="ai-platform" />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
