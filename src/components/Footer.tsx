import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-200 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
