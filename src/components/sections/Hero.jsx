import React from 'react';
import EditableBlock from '../ui/EditableBlock';
import { useNavigate } from "react-router-dom";

const Hero = ({ content, scrollToSection, editableProps }) => {
  const navigate = useNavigate();
  return (
    <div id="home" className="relative pt-20" style={{ 
      background: 'linear-gradient(135deg, #6A3A78 0%, #E2A9F1 100%)', 
      minHeight: '90vh' 
    }}>
      <div className="max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <EditableBlock
            id="headline"
            value={content.headline}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Courier Prime, monospace' }}
            {...editableProps}
          />
          <EditableBlock
            id="subheading"
            value={content.subheading}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
            {...editableProps}
          />
          <button 
            onClick={()=>navigate("/classes")}
            className="px-5 py-3 
                      rounded-xl 
                      font-semibold 
                      bg-[#FE6C63] 
                      text-white 
                      shadow-[0_4px_12px_rgba(244,138,113,0.35)]
                      transition-all duration-150
                      hover:bg-[#E45B53]
                      hover:-translate-y-[1px]"
          >
            Explore Classes
          </button>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="rounded-xl overflow-hidden" style={{ height: '400px' }}>
          <img
            src="/hero.jpg"
            alt="Good Company Yoga class"
            className="w-full h-full  object-cover"
            objectFit="cover"
            priority={true} // Hero image loads immediately
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;