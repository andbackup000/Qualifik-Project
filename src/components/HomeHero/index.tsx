/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, Imagem, Image1, Image2, Logo, TextContainer, InfosContainer, CodeItem } from './styles';
import image from '../../assets/Fabio-IA.png';
import picture from '../../assets/EngImage1-removed.png';
import photo from '../../assets/EngImage2-removed.png';
import LOGO from '../../assets/Qualifik-LOGO-Limpa.png';

function HomeHero() {
  return (
    <Container >
      <Imagem src={image} alt="FABIO" data-aos="zoom-in-right"/>
      <Image1 src={picture} alt="Eng1" data-aos="fade-up"/>
      <Image2 src={photo} alt="Eng2" data-aos="zoom-in"/>
      <Logo src={LOGO} alt='Qualifik' data-aos="zoom-out-up"/>
      <div>
        <TextContainer>
          <ul>
          </ul>

{/*           <h2>
            {''}
            <Typical
              loop={Infinity}
              steps={[
                'I am André',
                2500,
                'know me a little more',
                3000
              ]}
            />
          </h2> */}
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
