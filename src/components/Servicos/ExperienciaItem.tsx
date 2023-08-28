import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
