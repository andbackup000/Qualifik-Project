import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="15 anos" description="de Experiência" />
      <section>
        <ExperienciaItem
          year="Visão"
          title=""
          description="Ser uma referência em soluções inovadoras e sustentáveis para 
          a indústria de alimentos, contribuindo para o desenvolvimento socioeconômico e 
          ambiental do cerrado."
        />
        <ExperienciaItem
          year="Missão"
          title=""
          description="Oferecer serviços de consultoria de alta qualidade e confiabilidade 
          para a indústria de alimentos, auxiliando na gestão, no desenvolvimento de novos 
          produtos e processos, na segurança e qualidade dos alimentos, na regularização 
          sanitária e na implementação de práticas ESG."
        />
        <ExperienciaItem
          year="Valores"
          title=""
          description="Compromisso com a satisfação do cliente, respeito à biodiversidade 
          e ao conhecimento tradicional do cerrado, ética e transparência nas relações 
          internas e externas, inovação e melhoria contínua dos serviços prestados."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
