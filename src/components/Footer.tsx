import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black opacity-70 text-gray-200 p-4 text-2xl text-center w-full">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
