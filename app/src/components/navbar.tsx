// src/components/Navbar.tsx
import React from 'react';
import ConnectButton from './ConnectButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My App</div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
