'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Projects from '@/pages/Projects';
import ProfileCard from '@/pages/ProfileCard';

const Home: NextPage = () => {
  const visitorBadgeUrl = "https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2FGuilhermefariah&label=visitors%20(daily%2Ftotal)%3A&labelColor=%23000000&countColor=%2327b800&labelStyle=upper&dateShow=true";

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio pessoal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex-1 flex justify-center items-center bg-black">
        <ProjectCard
          title="Guilherme Faria"
          description="Software Developer"
          gifUrl="https://media.giphy.com/media/MC6eSuC3yypCU/giphy.gif"
          visitorBadgeUrl={visitorBadgeUrl}
        />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black">
        <Projects />
      </div>
      <div className="flex-1 flex justify-center items-center bg-black">
        <ProfileCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
