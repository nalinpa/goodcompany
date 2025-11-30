import React from 'react';

const FAQItem = ({ question, answer }) => {
  return (
    <div className="border-l-4 pl-6 py-4 bg-gray-50 rounded-r-xl shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftColor: '#E2A9F1' }}>
      <h3 className="text-xl font-bold mb-3" style={{ color: '#E80D11' }}>{question}</h3>
      <p className="text-gray-700 leading-relaxed">{answer}</p>
    </div>
  );
};

export default FAQItem;