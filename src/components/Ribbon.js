import React from 'react';
import styled from 'styled-components';

const Ribbon = ({ className }) => (
  <a
    href='https://github.com/diegomura/react-log'
    target='_blank'
    className={className}
  >
    <img
      alt='Fork me on GitHub'
      src='https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67' />
  </a>
);

export default styled(Ribbon)`
  > img {
    position: fixed;
    top: 0px;
    right: 0px;
    border: 0;
    z-index: 10000;
  }
`;
