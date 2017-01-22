import React, { PureComponent } from 'react';
import Nav1 from '../static/images/nav1.png';
import Nav2 from '../static/images/nav2.png';
import Nav3 from '../static/images/nav3.png';
import Nav4 from '../static/images/nav4.png';
import './ConsoleNav.scss';

class ConsoleNav extends PureComponent {
  render () {
    return (
      <nav className='console-nav'>
        <img src={Nav1} />
        <img src={Nav2} />
        <div className='console-nav__menu'>

        </div>
        <img src={Nav3} />
        <img src={Nav4} />
      </nav>
    );
  }
};

export default ConsoleNav;
