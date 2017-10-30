import React from 'react';
import styled from 'styled-components';
import Nav1 from '../static/images/nav1.png';
import Nav2 from '../static/images/nav2.png';
import Nav3 from '../static/images/nav3.png';
import Nav4 from '../static/images/nav4.png';

const Console = styled.nav`
  top: 0px;
  width: 100%;
  height: 52px;
  z-index: 1000;
  display: flex;
  position: fixed;
  padding: 10px 5px;
  background: #f3f3f3;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 2px solid #cacaca;
`;

const Icon = styled.img`
  height: 30px;
`;

export default () => (
  <Console>
    <span>
      <Icon src={Nav1} />
      <Icon src={Nav2} />
    </span>
    <span>
      <Icon src={Nav3} />
      <Icon src={Nav4} />
    </span>
  </Console>
);
