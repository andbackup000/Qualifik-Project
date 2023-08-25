import { AiFillHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Parceiros" />
      <section>
        <ConhecimentoItem title="CAA" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="Coop. Grande Sertão" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Núcleo do Pequi" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Tailwind" icon={<SiTailwindcss />} />
        <ConhecimentoItem title="Node" icon={<DiNodejsSmall />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
