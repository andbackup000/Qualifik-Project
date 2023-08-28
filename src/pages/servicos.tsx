import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import Conhecimentos from '../components/Conhecimentos';
import 'aos/dist/aos.css';
import ServicesPage from '../components/Servicos';
import Footer from '../components/Footer';




export default function Servicos() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Serviços | Qualifik Engenharia</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <ServicesPage />
        <Conhecimentos />
      </main>

      <Footer />
    </HomeContainer>
  );
}

