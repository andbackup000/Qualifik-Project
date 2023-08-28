import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 20%;
  position: relative;
  left: 18%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 80%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border: 3px solid ${({ theme }) => theme.primary};

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 3.5rem;
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.5rem;
  }
`
