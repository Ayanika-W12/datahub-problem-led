import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlatformVertical from './pages/PlatformVertical';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import ComparisonPage from './pages/ComparisonPage';
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
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/*" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/platform/analytics-nlp" element={<PlatformVertical slug="analytics-nlp" />} />
        <Route path="/platform/reporting-nlp" element={<PlatformVertical slug="reporting-nlp" />} />
        <Route path="/platform/governance-compliance" element={<PlatformVertical slug="governance-compliance" />} />
        <Route path="/platform/governance-versioning" element={<PlatformVertical slug="governance-versioning" />} />
        <Route path="/platform/interfacing" element={<PlatformVertical slug="interfacing" />} />
        <Route path="/platform/ai-readiness" element={<PlatformVertical slug="ai-readiness" />} />
        <Route path="/platform/workflow-orchestration" element={<PlatformVertical slug="workflow-orchestration" />} />
        <Route path="/vorro-vs-redox" element={<ComparisonPage competitor="redox" />} />
        <Route path="/vorro-vs-mulesoft" element={<ComparisonPage competitor="mulesoft" />} />
        <Route path="/vorro-vs-rhapsody" element={<ComparisonPage competitor="rhapsody" />} />
        <Route path="/vorro-vs-datavant" element={<ComparisonPage competitor="datavant" />} />
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
