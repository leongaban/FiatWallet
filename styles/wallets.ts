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

  &:first-child {
    margin-top: 2rem;
  }

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

  h2 {
    align-self: flex-end;
  }
`
