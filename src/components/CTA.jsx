import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = ({ backgroundColor = '#FFF8F3    ', heading = 'Wanna join us?', subheading = "Come and give it a go." }) => {
    const navigate = useNavigate();
    return (
    <div className="py-32 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
           {heading}
        </h2>
        {subheading && (
          <p className="text-xl mb-10" style={{ color: '#2D2D2D' }}>
            {subheading}
          </p>
        )}
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
          Book Your First Class
        </button>
        
      </div>
    </div>
  );
};

export default CTASection;