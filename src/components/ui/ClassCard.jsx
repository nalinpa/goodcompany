import React from 'react';
import OptimizedImage from './OptimizedImage';

const ClassCard = ({ name, description, time, image }) => {
  return (
    <div className="group">
      <div className="rounded-xl overflow-hidden mb-6 transition-transform hover:scale-105 border-2" style={{ height: '280px', borderColor: '#E2A9F1' }}>
        <OptimizedImage
          src={`/${image}`}
          alt={name}
          className="w-full h-full object-cover object-[5%_30%]"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#6A3A78' }}>{name}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: '#F48A71' }}>{time}</p>
      <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>{description}</p>
    </div>
  );
};

export default ClassCard;