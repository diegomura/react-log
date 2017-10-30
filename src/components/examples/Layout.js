import React from 'react';
import Log from 'react-log';

const Layout = () => (
  <Log>
    <div>
      <div style={{ color: 'red', fontSize: '40px' }}>
        <div>Div 1</div>
        <span>Span 1</span>
        <span style={{ color: 'blue' }}>Span 2</span>
      </div>
      <div style={{ fontSize: '40px' }}>
        Div 2
      </div>
    </div>
  </Log>
);

export default Layout;
