import React from 'react';
import SocialSection from '../components/SocialSection';
import CTA from '../components/CTA';
import TeachersSection from '../components/TeachersSection';
import FAQSection from '../components/FAQSection';

const About = () => {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#FFF8F3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div className="pt-32 pb-20" style={{ 
        background: 'linear-gradient(135deg, #6A3A78 0%, #E2A9F1 100%)'
      }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Courier Prime, monospace' }}>
            What is Social Yoga?
          </h1>
          <p className="text-2xl text-white/90">
            Movement that feels good. Company that feels easy.
          </p>
        </div>
      </div>

      <SocialSection />

      <TeachersSection />      

      <CTA />

      <FAQSection />
      
    </div>
  );
};

export default About;