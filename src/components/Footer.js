import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  font-size: 22px;
  text-align: center;
  margin-top: 60px;
  padding: 60px 50px;
  background: #f3f3f3;
  border-top: 2px solid #cacaca;

  > a {
    color: black !important;
  }

  > b {
    color: #d14;
  }
`;

export default () => (
  <Footer>
    Made with <b>♥</b> by <a href='https://github.com/diegomura' target='_blank'>@diegomura</a>
  </Footer>
);
