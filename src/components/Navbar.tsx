import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between p-4 bg-[#003be2] text-white">
      <div className="flex items-center gap-2.5  text-white">
     
          <Image src="/icon.svg" alt="byte-space-logo-with-text" width={32} height={32} />
          <span className="text-xl font-bold font-clash">ByteSpace</span>
      </div>
    </div>
  );
};

export default Navbar;