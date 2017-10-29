import React from 'react';
import render from './testRenderer';

describe('Links', () => {
  let output;

  test('Should render links without href', () => {
    output = render(
      <a>Lorem Ipsum</a>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render links with default styles', () => {
    output = render(
      <a href='www.google.com'>Lorem Ipsum</a>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render links with custom styles', () => {
    output = render(
      <a href='www.google.com' style={{ color: 'red' }}>Lorem Ipsum</a>
    );
    expect(output).toMatchSnapshot();
  });
});
