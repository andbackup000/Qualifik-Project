import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Years" description="Experience" />

      <section>
        <ExperienciaItem
          year="2021"
          title="Dev FrontEnd"
          description="I started my experiences as FrontEnd exploring the development of projects 
          from scratch, styling, componentization, SSG, SSR, consumption of REST APIs, libraries and 
          various frameworks as React.js, Next.js, Vite, Redux, JavaScript, TypeScript, Styled Components, 
          Tailwind, Material UI, Chakra UI, among others."
        />
        <ExperienciaItem
          year="2022"
          title="Dev FullStack"
          description="As a FullStack I had experiences in PERN production, REST API integration 
          with FrontEnd, CRUD operations, use of node.js , express, Docker, postgress and prismic 
          database, ORM Prisma, libraries as fastify, axios, socket.io, jsonwebtoken, bcrypt and 
          studies in SOLID architecture, use of Github and Gitpod development tools."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
