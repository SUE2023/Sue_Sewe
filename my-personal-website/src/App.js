import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"; 
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* ✅ Navigation Bar Included */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer /> {/* ✅ Global Footer - Appears on every page */}
      </div>
    </Router>
  );
}

export default App;

