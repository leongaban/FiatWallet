import styled from 'styled-components';

export const NavSection = styled.section`
  display: flex;
  flex-direction: row;
`

export const NavButton = styled.button`
  opacity: 0.7;
  flex-grow: 1;
  font-size: 1rem;
  height: 2.5rem;
  background: ${props => props.theme.offWhite};
  border: 1px solid ${props => props.theme.darkPurple};
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    color: ${props => props.theme.offWhite};
    background: ${props => props.theme.darkPurple};
    transition: all 200ms ease-in-out;
  }
`;

export const ActiveButton = styled(NavButton)`
  opacity: 1;
  color: ${props => props.theme.black};
  background: ${props => props.theme.cyan};
`;
