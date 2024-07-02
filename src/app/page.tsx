'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Projects from '@/pages/Projects';
import ProfileCard from '@/pages/ProfileCard';
import Certificates from '@/pages/Certificates';

const Home: NextPage = () => {
  const [showButton, setShowButton] = useState(false); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio pessoal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="About" className="flex-auto w-full flex justify-center items-center bg-black">
        <ProjectCard
          title="Guilherme Faria"
          description="Software Developer"
        />
      </div>
      <div id="Projects" className="flex-1 flex justify-center items-center bg-black">
        <Projects />
      </div>
      <div id="Certificates" className="flex-1 flex justify-center items-center bg-black">
        <Certificates /> 
      </div>
      <div id="Contact" className="flex-1 flex justify-center items-center bg-black">
        <ProfileCard />
      </div>
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-200 hover:bg-gray-800 text-black hover:text-gray-200 font-bold p-4 rounded-full flex items-center justify-center"
        >
          <FaArrowUp className="animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default Home;
