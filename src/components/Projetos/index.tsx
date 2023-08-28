import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import { proRealizado } from '../../data/[...data]';


function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        {proRealizado.slice(0, 3).map(proRealizado => (
          <ProjetoItem
            key={proRealizado.slug}
            img={proRealizado.thumbnail}
            title={proRealizado.title}
            type={proRealizado.type}
            slug={proRealizado.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Acervo de Projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
