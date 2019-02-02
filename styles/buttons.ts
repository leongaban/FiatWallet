import styled from 'styled-components';

export const NavSection = styled.section`
  display: flex;
  flex-direction: row;
`

export const NavButton = styled.button`
  flex-grow: 1;
  font-size: 1rem;
  height: 2.5rem;
  background: ${props => props.theme.offWhite};
  border: 1px solid ${props => props.theme.darkPurple};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.offWhite};
    background: ${props => props.theme.darkPurple};
    transition: all 200ms ease-in-out;
  }
`;
