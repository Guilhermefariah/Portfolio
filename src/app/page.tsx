import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio pessoal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
