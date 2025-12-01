import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection = ({ content, editableProps }) => {
  const navigate = useNavigate();
  return (
    <div id="pricing" className="py-32" style={{ backgroundColor: '#FFF8F3' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
          Pricing
        </h2>
        <div className="bg-white p-12 rounded-2xl shadow-lg border-4" style={{ borderColor: '#E2A9F1' }}>
         <div className="text-2xl leading-relaxed whitespace-pre-line mb-10">
          <p>Casual class — $15</p>
          <p>5-Class Pass — $60</p>
          </div>
           <button 
         className="px-5 py-3 
                    rounded-xl 
                    font-semibold 
                    bg-[#FE6C63] 
                    text-white 
                    shadow-[0_4px_12px_rgba(244,138,113,0.35)]
                    transition-all duration-150
                    hover:bg-[#E45B53]
                    hover:-translate-y-[1px]"
        onClick={() => navigate("https://app.acuityscheduling.com/schedule.php?owner=37677691")}
              >
          Book Your Class
        </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;