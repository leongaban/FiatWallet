import styled from 'styled-components';

export const StyledPage = styled.div`
  display: flex;
  width: 100%;
  color: ${props => props.theme.offWhite};
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  min-width: 25rem;
  height: 40rem;
  margin: 10rem auto;
  padding: 2.5rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
`;
