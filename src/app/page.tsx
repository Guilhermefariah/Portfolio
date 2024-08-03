'use client'
import type { NextPage } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ProjectLogo from '@/components/ProjectLogo/ProjectLogo'
import Projects from '@/pages/Projects'
import ProfileCard from '@/components/ProjectCard/ProfileCard'
import Certificates from '@/components/Certificates/Certificates'
import ScrollToTopButton from '@/components/Home/ScrollToTopButton'
import BackgroundButton from '@/components/Home/BackgroundButton'
import useBackgroundColor from '@/hooks/useBackgroundColor'

const Home: NextPage = () => {
  const [bgColor, BackgroundColor] = useBackgroundColor()

  return (
    <div className={`flex flex-col min-h-screen ${bgColor === 'black' ? 'bg-black' : 'bg-white'}`}>
      <Header />
      <main className="flex-auto w-full">
        <section id="About" className={`w-full flex justify-center items-center ${bgColor === 'black' ? 'bg-black' : 'bg-white'}`}>
          <ProjectLogo title="Guilherme Faria" description="Software Developer" />
        </section>
        <section id="Projects" className={`flex-1 flex justify-center items-center ${bgColor === 'black' ? 'bg-black' : 'bg-white'}`}>
          <Projects />
        </section>
        <section id="Certificates" className={`flex-1 flex justify-center items-center ${bgColor === 'black' ? 'bg-black' : 'bg-white'}`}>
          <Certificates />
        </section>
        <section id="Contact" className={`flex-1 flex justify-center items-center ${bgColor === 'black' ? 'bg-black' : 'bg-white'}`}>
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
