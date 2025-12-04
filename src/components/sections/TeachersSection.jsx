import React from 'react';

const TeachersSection = ({ content, editableProps }) => {
  return (
    <>

      {/* Intro */}
      <div className="py-20" style={{ backgroundColor: '#FFF8F3' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-5xl md:text-6xl font-bold mb-10" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
              Who are we?       
            </h2>
          <p className="text-xl leading-relaxed" style={{ color: '#2D2D2D' }}>
            Good Company Yoga is run by yoga teachers Rachael Fleming and Veena Patel — two friends who bonded over wobbly poses, good coffee, and the kind of post-class chats (and occasional chaos) that made them realise yoga is better when it's shared.
          </p>
        </div>
      </div>

      {/* Teachers */}
      <div className="py-20" style={{ backgroundColor: '#FFF8F3' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Veena */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
                Veena Patel
              </h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                <p>
                  Veena went to her first yoga class at 13 and never really left. Yoga helps her calm her monkey mind, connect with her culture, and (let's be honest) work on her baby biceps. Her teaching is all about feeling connected, encouraging choice and a bit of fun on the mat.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border-8 border-[#E2A9F1]" style={{ height: '500px' }}>
                <img
                  src="/veena.jpg"
                  alt="Veena Patel - Yoga Teacher"
                  className="w-full h-full object-cover object-top border-[2px] border-[#6A3A78]"
                />
              </div>
            </div>
          </div>

          {/* Rachael */}
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden border-8 border-[#E2A9F1]" style={{ height: '500px' }}>
                <img
                  src="/rachael.jpg"
                  alt="Rachael Fleming - Yoga Teacher"
                  className="w-full h-full object-cover object-top border-[2px] border-[#6A3A78]"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
                Rachael Fleming
              </h3>
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
                <p>
                  Rachael found yoga when she moved to Wellington in 2016, looking for grounding and community in a new city. With a dance background, her flow sequences encourage people to find joy in what feels right in their own bodies - the same way she did when she first stepped on to the mat.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-4xl mx-auto mt-20 py-16">
            <p className="text-2xl leading-relaxed font-medium" style={{ color: '#6A3A78' }}>
              Together, we've created a space that feels like practising with friends: warm, unpretentious, a little silly at times, and always welcoming.
            </p>
            <p className="text-xl mt-6" style={{ color: '#2D2D2D' }}>
              We started Good Company Yoga because yoga brought us together — now we love sharing that with everyone else.
            </p>
          </div>
        </div>
      </div>
      </>
  );
};

export default TeachersSection;