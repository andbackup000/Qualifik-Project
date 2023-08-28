import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: -4rem;
  

  > section {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr ));
    grid-gap: 13px;
    width: 100%;
    

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    margin-top: 5rem;
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 28rem;
    border: solid;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 1px 7px #999;

    max-width: 30rem;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    box-shadow: 0px 2px #666;
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
