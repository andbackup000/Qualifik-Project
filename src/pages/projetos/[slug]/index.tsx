import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
import { proRealizado } from '../../../data/[...data]';
import Footer from '../../../components/Footer';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto() {
  const router = useRouter();
  const { asPath } = router;

  const slug = asPath.split('/')[2];

  if (router.isFallback) {
    return <LoadingScreen />;
  }


  const projeto = proRealizado.find(proj => proj.slug === slug);

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | proRealizados</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />
      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.slug}>Veja Online</a>
        </button>
      </main>
      <Footer />
    </ProjetoContainer>
  );
}