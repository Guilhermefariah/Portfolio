// pages/index.tsx (ou Home.tsx)
'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Projects from '@/pages/Projects';
import ProfileCard from '@/pages/ProfileCard';
import Certificates from '@/pages/Certificates';
import ContactModal from '@/components/ContactModal'; 

const Home: NextPage = () => {
  const [showButton, setShowButton] = useState(false);
  const [bgColor, setBgColor] = useState<'black' | 'white'>('black');
  const [showContactModal, setShowContactModal] = useState(false);

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

  const toggleBackgroundColor = () => {
    setBgColor(bgColor === 'black' ? 'white' : 'black');
  };

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <div className={`flex flex-col min-h-screen bg-${bgColor}`}>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio pessoal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div id="About" className={`flex-auto w-full justify-center items-center bg-${bgColor}`}>
        <ProjectCard
          title="Guilherme Faria"
          description="Software Developer"
        />
      </div>
      <div id="Projects" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
        <Projects />
      </div>

      <div id="Certificates" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
        <Certificates />
      </div>

      <div id="Contact" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
        <ProfileCard />
      </div>
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-200 hover:bg-gray-600 text-black hover:text-gray-200 font-bold p-4 rounded-full flex items-center justify-center"
        >
          <FaArrowUp className="animate-bounce" />
        </button>
      )}
      <button
        onClick={toggleBackgroundColor}
        className="fixed bottom-8 left-8 bg-gray-200 hover:bg-gray-600 text-black hover:text-gray-200 font-bold p-4 rounded-full flex items-center justify-center"
      >
        {bgColor === 'black' ? <FaToggleOn /> : <FaToggleOff />}
      </button>
      {showContactModal && (
        <ContactModal onClose={toggleContactModal} />
      )}
      <button
        onClick={toggleContactModal}
        className="fixed bottom-8 right-24 bg-blue-700 hover:bg-green-600 text-gray-200 font-bold p-3 rounded-lg flex items-center justify-center"
      >
        Contact
      </button>
    </div>
  );
};

export default Home;
