import React from 'react';
import render from './testRenderer';

describe('Lists', () => {
  let output;

  test('Should render unordered list with default styles', () => {
    output = render(
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render ordered list with default styles', () => {
    output = render(
      <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ol>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render unordered list with custom styles', () => {
    output = render(
      <ul style={{ color: 'red', fontSize: '8px' }}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    );
    expect(output).toMatchSnapshot();
  });

  test('Should render ordered list with custom styles', () => {
    output = render(
      <ol style={{ color: 'red', fontSize: '8px' }}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ol>
    );
    expect(output).toMatchSnapshot();
  });
});
