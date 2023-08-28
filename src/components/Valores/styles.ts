import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-bottom: -4rem;
  

  > section {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    position: relative;
    left: 18%;
    gap: 1.5rem;
    



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
    margin-top: -2rem;
    padding: 1rem;
    padding-top: 2.5rem;
    height: 23rem;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.8),
    inset 4px 4px 7px rgba(0, 0, 0, 0.2);


    max-width: 70%;

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
      color: ${({ theme }) => theme.tertiary};
      font-size: 1.3rem;
      line-height: 2rem;

      font-weight: bold;
      text-shadow: -1px -1px 0 #fff, 0.5px 0.5px 0 #000;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
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
      font-size: 1.2rem;
    }

    > div {
      height: auto;
      padding: 2rem;


      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        line-height: 1.5rem;
        font-size: 0.8rem;
      }
    }
  }
`;
