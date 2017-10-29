import React from 'react';
import render from './testRenderer';

describe('Headings', () => {
  let output;

  test('Should render heading 1 with default styles', () => {
    output = render(<h1>Heading 1</h1>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 2 with default styles', () => {
    output = render(<h2>Heading 2</h2>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 3 with default styles', () => {
    output = render(<h3>Heading 3</h3>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 4 with default styles', () => {
    output = render(<h4>Heading 4</h4>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 5 with default styles', () => {
    output = render(<h5>Heading 5</h5>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 1 with custom styles', () => {
    output = render(<h1 style={{ color: 'red' }}>Heading 1</h1>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 2 with custom styles', () => {
    output = render(<h2 style={{ color: 'red' }}>Heading 2</h2>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 3 with custom styles', () => {
    output = render(<h3 style={{ color: 'red' }}>Heading 3</h3>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 4 with custom styles', () => {
    output = render(<h4 style={{ color: 'red' }}>Heading 4</h4>);
    expect(output).toMatchSnapshot();
  });

  test('Should render heading 5 with custom styles', () => {
    output = render(<h5 style={{ color: 'red' }}>Heading 5</h5>);
    expect(output).toMatchSnapshot();
  });
});
