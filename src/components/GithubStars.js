import React from 'react';
import styled from 'styled-components';

const GithubStars = ({ className }) => (
  <iframe
    src='https://ghbtns.com/github-btn.html?user=diegomura&repo=react-log&type=star&count=true&size=large'
    frameBorder='0'
    scrolling='0'
    className={className}
  />
);

export default styled(GithubStars)`
  width: 140px;
  height: 40px;
  margin-top: 40px;
`;
