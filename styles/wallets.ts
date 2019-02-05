import styled from 'styled-components';

export const WalletsListContainer = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  height: 26rem;
`

export const WalletsListItem = styled.section`
  margin: 1px 0;
  padding: 1rem;
  height: 5rem;
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.cyan};
  background: ${props => props.theme.cyan};
  cursor: pointer;

  h1 {
    font-family: 'Oswald';
    padding-bottom: 0.5rem;
    border-bottom: 1px dotted ${props => props.theme.darkBlue};
  }

  h1, h2 { margin-bottom: 0.5rem; }

  &:first-child { margin-top: 2rem; }

  &:hover {
    color: ${props => props.theme.offWhite};
    border: 1px solid ${props => props.theme.black};
    background: ${props => props.theme.darkBlue};
    transition: all 200ms ease-in-out;
  }
`

export const WalletInfo = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  h2 { align-self: flex-end; }
`

export const WalletView = styled(WalletsListItem)`
  height: 22.5rem;

  button {
    cursor: pointer;

    &:hover {
      opacity: 1;
      color: ${props => props.theme.offWhite};
      background: ${props => props.theme.darkPurple};
      transition: all 200ms ease-in-out;
    }
  };

  &:hover {
    color: ${props => props.theme.black};
    border: 1px solid ${props => props.theme.cyan};
    background: ${props => props.theme.cyan};
    transition: none;
    cursor: default;
  }
`;

export const WalletInputGroup = styled.section`
  margin: 1rem 0;
  width: 100%;

  input { width: 6rem; }

  button {
    margin-left: 1rem;
    width: 10.5rem;
  }

  input,
  button {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const WideButton = styled.button`
  margin-top: 0.5rem;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  line-height: 0.5rem;
`;
