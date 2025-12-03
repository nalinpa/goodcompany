import React, { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="py-32" style={{ backgroundColor: '#6A3A78' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div 
          className="rounded-xl overflow-hidden border-4 relative cursor-pointer" 
          style={{ height: '500px', borderColor: '#FFDE59' }}
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              {/* Poster Image */}
              <img 
                src="/video-poster.jpg" 
                alt="Welcome to Good Company Yoga" 
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl" style={{ backgroundColor: '#FFDE59' }}>
                  <svg className="w-12 h-12 ml-2" fill="#2D2D2D" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1141568900?autoplay=1&title=0&byline=0&portrait=0"
              title="Good Company Yoga Welcome Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;