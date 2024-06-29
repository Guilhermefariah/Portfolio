import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projects: NextPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', imageUrl: '/project1.jpg' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imageUrl: '/project2.jpg' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', imageUrl: '/project3.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Projects</title>
        <meta name="description" content="Lista de projetos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center my-8">Projects</h1>
        <div className="mx-auto max-w-4xl">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-lg" />
                <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
