import styled from 'styled-components'

export const PriceList = styled.section`
  overflow-y: scroll;
  margin: 1rem 0;
  height: 24rem;

  ul {
    padding: 1rem;
    background: ${props => props.theme.lightgrey};
  }

  li {
    margin: 0 0 0.5rem;
    padding: 0;
    color: ${props => props.theme.darkBlue};
    list-style: none;
    text-align: left;
  }

  span {
    margin-right: 1rem;
  }
`;
