import React from 'react';

import EditableBlock from '../ui/EditableBlock';

const AboutSection = ({ content, editableProps }) => {
  return (
    <div id="about" className="py-32" style={{ backgroundColor: '#FFF8F3' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
              Our Vibe
            </h2>
            <EditableBlock
              id="vibe"
              value={content.vibe}
              multiline
              className="text-lg leading-relaxed whitespace-pre-line"
              style={{ color: '#2D2D2D' }}
              {...editableProps}
            />
          </div>
          <div>
            <div className="rounded-xl overflow-hidden border-8 border-[#E2A9F1]" style={{ height: '500px' }}>
              <img
                src="/vibe.webp"
                alt="Good Company Yoga community gathering"
                className="w-full h-full object-cover border-[2px] border-[#6A3A78]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;