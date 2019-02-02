import React from 'react'
import styled from 'styled-components';

const FreeForexLink = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

export default () => (
  <FreeForexLink>
    <a href="https://www.freeforexapi.com">
      <img alt="Free Forex API" src="https://www.freeforexapi.com/Images/link.png" height="20"/>
    </a>
  </FreeForexLink>
)
