import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';
import { valor } from '../../data/[...data]';

function Experiencias() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % valor.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container data-aos="zoom-in">
      <section>
        <ExperienciaItem
          year={valor[index].year}
          title=""
          description={valor[index].description}
        />
      </section>
    </Container>
  );
}

export default Experiencias;
