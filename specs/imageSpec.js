import React from 'react';
import render from './testRenderer';

describe('Image', () => {
  let output;

  test('Should render image with default styles', () => {
    output = render(
      <img src="http://lorempixel.com/400/200/sports/5/" width="400" height="200" />
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render image with custom styles', () => {
    output = render(
      <img 
        src="http://lorempixel.com/400/200/sports/5/" 
        width="400" 
        height="200"
        style={{
          width: '800px',
          height: '400px',
          border: '2px solid red'
        }} />
    );
    expect(output).toMatchSnapshot();
  });
});
