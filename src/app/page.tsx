'use client'
import type { NextPage } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import Projects from '@/pages/Projects'
import ProfileCard from '@/pages/ProfileCard'
import Certificates from '@/pages/Certificates'
import ScrollToTopButton from '@/Home/ScrollToTopButton'
import BackgroundButton from '@/Home/BackgroundButton'
import useBackgroundColor from '@/hooks/useBackgroundColor'

const Home: NextPage = () => {
  const [bgColor, BackgroundColor] = useBackgroundColor()

  return (
    <div className={`flex flex-col min-h-screen bg-${bgColor}`}>
      <Header />
      <main className="flex-auto w-full justify-center items-center">
        <section id="About" className={`w-full justify-center items-center bg-${bgColor}`}>
          <ProjectCard title="Guilherme Faria" description="Software Developer" />
        </section>
        <section id="Projects" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
          <Projects />
        </section>
        <section id="Certificates" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
          <Certificates />
        </section>
        <section id="Contact" className={`flex-1 flex justify-center items-center bg-${bgColor}`}>
          <ProfileCard />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
      <BackgroundButton bgColor={bgColor} BackgroundColor={BackgroundColor} />
    </div>
  )
}

export default Home
