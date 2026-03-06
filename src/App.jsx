import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Story from './pages/Story';
import About from './pages/About';
import Benefits from './pages/Benefits';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/story"    element={<Story />} />
          <Route path="/about"    element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;