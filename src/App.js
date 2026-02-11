import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <div className="portfolio-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholders for other links to prevent errors if clicked, though Navbar links are hash links for Works/Contact currently */}
        </Routes>
        <footer className="portfolio-footer">@2026. John Kylo E. Dela Cruz. All rights reserved.</footer>
      </div>
    </Router>
  );
}

export default App;
