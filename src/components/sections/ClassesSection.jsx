import React from 'react';
import ClassCard from '../ui/ClassCard';

const ClassesSection = () => {
  const classes = [
    {
      name: "Good Company Thursdays (PM)",
      description: "This is yoga with personality — inclusive, fun and never too serious. You’ll move, sweat, and have a laugh with a room full of good people. And when we’re done, we wander out for a wine.",
      time: "5.30 - 6.30pm @ Toi Poneke (61/69 Abel Smith Street)",
      image: "thursday.webp"
    },
    {
      name: "Stretch & Sip Sundays (AM)",
      description: "Easygoing Sunday movement with friendly people and zero pressure. We balance ease and a bit of challenge on the mat, and then wander out for a post-class coffee. A weekend ritual worth keeping.",
      time: "10 - 11am @ Thistle Hall (293 Cuba Street)",
      image: "sunday.webp"
    }
  ];

  const popups = [
    {
      name: "Stretch & Sip Pop-Up (Silly Season Survival Edition)",
      description: "A relaxed morning class for anyone already feeling very “December.” Ignore your to-do list and join us for an easy-going, beginner-friendly yoga session. Then wander out with us for a coffee - because caffeine is a coping strategy, and we fully support that.",
      time: "10 - 11am Sunday 14 December @ Thistle Hall (293 Cuba Street)",
      image: "popup2.jpg"
    },
    {
      name: "Good Company Nights Pop-Up (End of Year Wind-Down)",
      description: "A fun Wednesday evening class for anyone slowly dissolving into end-of-year chaos. Shake off the week, move a little, laugh a little, and slide gently into holiday mode. Then join us for a wine  - because it’s December, and honestly, you’ve earned it.",
      time: "5.30 - 6.30pm Wednesday 17 December @ Toi Poneke (61/69 Abel Smith Street)",
      image: "popup1.jpg"
    }
  ];

  return (
    <div id="classes" className="py-32 bg-white" style={{ backgroundColor: "#FFF8F3"}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#6A3A78', fontFamily: 'Courier Prime, monospace' }}>
            Our Classes
          </h2>
          <p className="text-2xl mt-6" style={{ color: '#2D2D2D' }}>Find the perfect practice for you</p>
          <p className="text-lg font-bold mt-6" style={{ color: '#FE6C63' }}>Our regular classes start mid-January, but we couldn’t wait — come hang out at our December pop-ups in the meantime.</p>
        </div>


      <div className="grid md:grid-cols-2 gap-12">
          {popups.map((cls, idx) => (
            <ClassCard key={idx} {...cls} />
          ))}
        </div>
        
 <div className="bg-white p-12 rounded-2xl mx-auto mt-12 px-6 text-center shadow-lg border-4" style={{ borderColor: '#E2A9F1' }}>
         <div className="text-2xl leading-relaxed whitespace-pre-line mb-10">
          <p>Book a popup class now for $15</p>
          </div>
           <button 
         className="px-5 py-3 
                    rounded-xl 
                    font-semibold 
                    bg-[#FE6C63] 
                    text-white 
                    shadow-[0_4px_12px_rgba(244,138,113,0.35)]
                    transition-all duration-150
                    hover:bg-[#E45B53]
                    hover:-translate-y-[1px]"
        onClick={() => navigate("https://app.acuityscheduling.com/schedule.php?owner=37677691")}
              >
          Book a Class
        </button>
        </div>

        <div className="text-center m-20">
          <p className="text-2xl mt-6" style={{ color: '#2D2D2D' }}>Regular classes starting mid-January</p>
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