import React from 'react';
import styled from 'styled-components';

const Logo = ({ className }) => (
  <h1 className={className}>
    React
    <span>log</span>
  </h1>
);

export default styled(Logo)`
  margin: 0px;
  font-size: 85px;
  font-weight: normal;

  > span {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom right, #13493b, #016a26);
    font-size: 80px;
    font-weight: bold;
    margin-left: 10px;
    padding: 8px;
  }
`;
