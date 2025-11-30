import React from 'react';

const CommunitySection = () => {
  return (
    <div className="py-32" style={{ backgroundColor: '#FFF8F3' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-xl overflow-hidden border-8 border-[#E2A9F1] rounded-[22px]" style={{ height: '500px' }}>
              <img 
                src="/community.jpg" 
                alt="Good Company Yoga community gathering" 
                className="w-full h-full object-cover rborder-[2px] border-[#6A3A78]"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
              Community
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
              Yoga's better together. Our classes bring people from all walks of life — teachers, parents, office workers, creatives — to breathe, move, and connect. The vibe is calm, kind, and social in a natural way. No one takes themselves too seriously here, and that's exactly how we like it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;