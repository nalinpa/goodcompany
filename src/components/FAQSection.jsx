import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      q: "Do I need to be good at yoga to join?",
      a: "Not at all! Our classes are designed for every body and every experience level. We cater for all abilities, whether you're brand new to yoga or a seasoned yogi, you'll be welcomed exactly as you are. Our teachers will offer up modifications for your needs."
    },
    {
      q: "What happens after yoga?",
      a: "We're here to build connections on and off the mat. After class, we head to our favourite nearby cafe or bar to relax, chat, and get to know each other. Yoga has brought some of the best people into our lives and now we're paying it forward."
    },
    {
      q: "What if I don't drink alcohol?",
      a: "No pressure to drink alcohol — mocktails, sodas, or snacks are just as welcome. It's about connection, not consumption."
    },
    {
      q: "Do I have to stay for the social part?",
      a: "Nope! We'd love for you to hang out, but participation is always your choice. You're welcome to roll up your mat and roll out."
    },
    {
      q: "What do I need to bring?",
      a: "Just yourself! Bring a mat if you have one, a drink bottle if you want one, and your wallet and ID for your post yoga drink/snacks. Most importantly, an open mind and heart. We recommend wearing comfy clothes that you can move in."
    }
  ];

  return (
    <div id="faqs" className="py-32 bg-white" style={{ backgroundColor: '#FFF8F3' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
          FAQs
        </h2>
        <div>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;