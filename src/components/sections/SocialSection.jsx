import React from 'react';

const SocialSection = () => {
  return (
    <div className="py-32"  style={{ backgroundColor: '#FFF8F3' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
              What is social yoga?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
              <p>
                At Good Company Yoga, we call what we do <strong style={{ color: '#6A3A78' }}>social yoga</strong> — a relaxed, inclusive style of practice where the people matter just as much as the poses. Social yoga is exactly what it sounds like — yoga that doesn’t end when class does. 
              </p>
              <p>
                Social yoga is for real humans with real lives.
                People who want connection as much as movement.
                People who like community that feels casual, warm, and a little bit addictive.
              </p>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden border-8 border-[#E2A9F1" style={{ height: "500px" }}>
              <img 
                src="/social.jpg" 
                alt="Social yoga at Good Company" 
                className="w-full h-full object-cover border-[2px] border-[#6A3A78]"
              />
            </div>
          </div>
        </div>

        {/* Bottom centered text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-2xl font-bold mb-4" style={{ color: '#FE7667' }}>
            It's yoga — but with friends you haven't met yet.
          </p>
          <p className="text-xl" style={{ color: '#FE7667' }}>
            It's good movement, good energy, and genuinely good company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;