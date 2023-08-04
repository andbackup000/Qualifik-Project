import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Do you need
            <br />
            my services?
          </>
        }
        description={
          <>
            Fill out the form below and
            <br />
            I will get back to you shortly.
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContato;
