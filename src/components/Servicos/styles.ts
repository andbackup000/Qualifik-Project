import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  margin-bottom: -4rem;
`
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  grid-gap: 20px;
  width: 100%;
`;

export const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.primary};

  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    padding-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-weight: 500;
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 1rem;
    border-bottom: 1px dashed ${({ theme }) => theme.secondary};
    padding-bottom: 0.5rem;
  }
`;
