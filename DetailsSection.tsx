import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Application from './pages/Application';
import About from './pages/About';
import Admin from './pages/Admin';
import ExpectationDetails from './pages/ExpectationDetails';
import JourneyDetails from './pages/JourneyDetails';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-emerald selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/application" element={<Application />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/expectation/:id" element={<ExpectationDetails />} />
            <Route path="/journey/:id" element={<JourneyDetails />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
