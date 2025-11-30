import React from 'react';
import ClassCard from './ClassCard';

const ClassesSection = () => {
  const classes = [
    {
      name: "Good Company Thursdays",
      description: "This is yoga with personality — inclusive, fun and never too serious. You’ll move, sweat, and have a laugh with a room full of good people. And when we’re done, we wander out for a wine.",
      time: "5.30 - 6.30 @ Toi Poneke (61/69 Abel Smith Street)",
      image: "thursday.jpg"
    },
    {
      name: "Stretch & Sip Sundays",
      description: "Slow, floor-based movement to ease tension and soften the edges of your day. Think deep breaths, low lights, calm music — and if you fancy, a glass of wine after.",
      time: "10 - 11 @ Thistle Hall (293 Cuba Street)",
      image: "sunday.jpg"
    }
  ];

  return (
    <div id="classes" className="py-32 bg-white" style={{ backgroundColor: "#FFF8F3"}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
            Our Classes
          </h2>
          <p className="text-xl mt-6" style={{ color: '#2D2D2D' }}>Find the perfect practice for you</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {classes.map((cls, idx) => (
            <ClassCard key={idx} {...cls} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;