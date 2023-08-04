import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Back to Top
        </button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/MaxSyos')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/andr%C3%A9-abreu-de-s%C3%A1-b17908117/')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
