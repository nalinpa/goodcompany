import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'skittles09') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#FFF8F3', minHeight: '100vh' }}>
        <LoginModal
          showLogin={showLogin}
          password={password}
          setPassword={setPassword}
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />

        <Navigation
          isLoggedIn={isLoggedIn}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>

        <Footer
          scrollToSection={scrollToSection}
          onShowLogin={() => setShowLogin(true)}
        />
      </div>
    </Router>
  );
};

export default App;