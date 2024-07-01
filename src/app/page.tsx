'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Projects from '@/pages/Projects';
import ProfileCard from '@/pages/ProfileCard';
import Certificates from '@/pages/Certificates';

const Home: NextPage = () => {

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
    </div>
  );
};

export default Home;
