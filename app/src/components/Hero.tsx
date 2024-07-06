// src/components/Hero.tsx
import React from 'react';
import ConnectButton from './ConnectButton';
const Hero = () => {
  return (
    <section className="bg-gradient-to-r  text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hello Dhruv Bhaiya👋
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          click below to connect wallet
        </p>
        <div className="flex justify-center space-x-4">
        <div>
          <ConnectButton />
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
