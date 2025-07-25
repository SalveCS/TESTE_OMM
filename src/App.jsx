import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CascudoSection from './components/CascudoSection';
import EnergiaSalgadaSection from './components/EnergiaSalgadaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import TermosUso from './components/TermosUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'termos':
        return <TermosUso onBack={() => handlePageChange('home')} />;
      case 'privacidade':
        return <PoliticaPrivacidade onBack={() => handlePageChange('home')} />;
      default:
        return (
          <div className="App">
            <Header />
            <main>
              <HeroSection />
              <CascudoSection />
              <EnergiaSalgadaSection />
              <AboutSection />
            </main>
            <Footer onPageChange={handlePageChange} />
          </div>
        );
    }
  };

  return renderPage();
}

export default App;

