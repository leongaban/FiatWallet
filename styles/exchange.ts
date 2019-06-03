import styled from 'styled-components'

export const ExchangeSection = styled.section`
  position: absolute;
  top: 360px;
  width: 360px;
  margin-left: -20px;
  padding: 1rem;
  height: 273px;
  color: ${props => props.theme.black};
  background: ${props => props.theme.cyan};
  border: 1px solid ${props => props.theme.darkBlue};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  h1 { font-size: 1.5rem; }
  h2 { font-size: 1rem; }
  h1, h2 { margin-bottom: 0.5rem; }

  button {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.offWhite};
      border: 1px solid ${props => props.theme.black};
      background: ${props => props.theme.darkPurple};
      transition: all 200ms ease-in-out;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 1rem;
  height: 1.5rem;
`;

export const ExchangeList = styled.ul`
  button {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 0.5rem;
    padding: 1rem;
    width: 100%;
    font-size: 0.8rem;
  }
`;
