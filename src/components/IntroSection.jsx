import React from 'react';
import EditableBlock from './EditableBlock';

const IntroSection = ({ content, editableProps }) => {
  return (
    <div className="py-24 bg-white shadow-inner">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <EditableBlock
          id="intro"
          value={content.intro}
          multiline
          className="text-xl leading-relaxed text-gray-800"
          {...editableProps}
        />
      </div>
    </div>
  );
};

export default IntroSection;