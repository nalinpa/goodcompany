import React from 'react';

const CTASection = ({ backgroundColor = '#FFF8F3    ', heading = 'Wanna join us?', subheading = "Come and give it a go." }) => {
  return (
    <div className="py-32 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#6A3A78' }}>
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
              >
          Book Your First Class
        </button>
      </div>
    </div>
  );
};

export default CTASection;