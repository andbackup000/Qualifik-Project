import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            nossos serviços?
          </>
        }
        description={
          <>
            Preencha o fromulário abaixo 
            <br />
            e logo iremos responder.
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
