import React from 'react';

const WhyWeStartedSection = () => {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
          Why We Started
        </h2>
        <div className="text-xl leading-relaxed space-y-6" style={{ color: '#2D2D2D' }}>
          <p>
            We started Good Company Yoga because we believe yoga shouldn't feel intimidating, exclusive, or performative. It should feel like home.
          </p>
          <p>
            Too often, yoga spaces can feel like you need to look a certain way, have the right gear, or already know what you're doing. We wanted to create something different — a space where you could show up exactly as you are, wobbles and all.
          </p>
          <p className="text-2xl font-bold" style={{ color: '#E80D11' }}>
            Because the best part of yoga isn't perfection. It's connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStartedSection;