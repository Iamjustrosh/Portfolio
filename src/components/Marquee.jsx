import React from 'react';

const Marquee = () => {
  return (
    <div className="hero-marquee uppercase bg-[#4E0025] flex items-center text-white font-bold text-7xl md:text-9xl overflow-hidden">
      <div
        className="flex min-w-max whitespace-nowrap px-6 animate-scroll-left"
        style={{
          animationDuration: '50s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {[...Array(10)].map((_, i) => (
          <h1 key={i} className="shrink-0 flex gap-4 items-center p-5">
            Hi I'm Just <span className="text-[#D96704]">Rosh</span>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
