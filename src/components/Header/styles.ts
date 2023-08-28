import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border-bottom: 0.3px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    

    > img {
      margin-left: 1rem;
      width: 8rem;
      flex: 1;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    font-size: 1.1rem;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;
    text-transform: ${props => 
      props.isActive ? "uppercase" : "Capitalize" 
    };
    

    &:hover {
      font-size: 1rem;
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
