import NavLink from './NavLink';
import { Container } from './styles';
import LOGO from '../../assets/Qualifik-dark.png';

function Header() {
  return (
    <Container>
      <ul>
        <img src={LOGO} alt='Qualifik'/>
      </ul>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
      </ul>
      <ul>
        
      </ul>
    </Container>
  );
}

export default Header;
