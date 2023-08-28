import { services } from '../../data/[...data]';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';



function ServicesPage() {
  return (
    <Container>
      <SectionTitle title="15 anos" description="de Experiência" />
      <section>
        {services.map(service => (
          <ExperienciaItem year={service.title}
            title={service.title}
            description={service.description} />
        ))}
      </section>
    </Container>
  );
}

export default ServicesPage;
