import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-gray-200 p-4">
      <h1 className="text-3xl font-bold">Meu Portfólio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
