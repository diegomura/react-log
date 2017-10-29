import React from 'react';
import render from './testRenderer';

describe('Paragraph', () => {
  let output;

  test('Should render paragraph with default styles', () => {
    output = render(
      <p>Lorem Ipsum</p>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render paragraph with custom styles', () => {
    output = render(
      <p style={{ color: 'red' }}>Lorem Ipsum</p>
    );
    expect(output).toMatchSnapshot();
  });
});
