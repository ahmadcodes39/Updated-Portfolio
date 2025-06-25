import React from 'react';
import Left from './HeroComponents/Left';
import Right from './HeroComponents/Right';

const HeroSection = () => {
  return (
    <div id='home' className="px-6 md:px-20 py-10 flex flex-col-reverse md:flex-row items-center justify-between text-primary gap-10 h-[89vh]">
      <Left />
      <Right />
    </div>
  );
};

export default HeroSection;
