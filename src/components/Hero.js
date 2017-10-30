import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import CodeBlock from './CodeBlock';
import Link from './Link';
import GithubStars from './GithubStars';

const Hero = styled.main`
  display: flex;
  height: 100%;
  min-height: 100vh;
  padding: 70px 20px;
  background: white;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #e6e6e6;
`;

const Cursor = styled.span`
  top: 10px;
  left: 16px;
  color: #367cf1;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
`;

const Subtitle = styled.h2`
  margin: 0px;
  color: #989898;
  margin-top: 8px;
  font-weight: normal;
`;

const SampleCode = styled(CodeBlock)`
  margin-top: 30px;
  padding-right: 55px;
  background-color: #fbfbfb;

  > code {
    background-color: #fbfbfb !important;
  }
`;

export default () => (
  <Hero>
    <Cursor>></Cursor>
    <Logo />
    <Subtitle>React for the Console</Subtitle>
    <GithubStars />
    <SampleCode literal={`
      const Logo = () => (
        <Log>
          <h1
            style={{
              color: 'black',
              fontSize: '50px'
              fontWeight: 'normal',
              fontFamily: 'Open Sans, sans-serif',
            }}>
            React
            <span
              style={{
                color: 'white',
                fontSize: '45px',
                fontWeight: 'bold',
                marginLeft: '10px',
                padding: '5px'
                fontFamily: 'Arial, Helvetica, sans-serif',
                background: 'linear-gradient(to bottom right, #13493b, #016a26)',
              }}>
              log
            </span>
          </h1>
        </Log>
      );
    `} />
    <Link href='ReactLogLogo' />
  </Hero>
);
