import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  const renderIcon = (): JSX.Element => (
    <Link to='/' className='icon'>
      <div className='first-name'>Wei-Chun&nbsp;</div>
      <div className='last-name'>Huang</div>
    </Link>
  );
  const renderTabs = (): JSX.Element => (
    <div className='tabs'>
      <nav className='elements'>
        <NavLink to='/'>Work</NavLink>
        <div className='divider'>/</div>
        <NavLink to='misc'>misc.</NavLink>
        <div className='divider'>/</div>
        <NavLink to='about'>About</NavLink>
        <div className='divider'>/</div>
        <a href='mailto:isaac.huang.tw@gmail.com'>Contact</a>
      </nav>
    </div>
  );

  return (
    <div className='nav'>
      <div className='nav__bar rfs-main'>
        {renderIcon()}
        {renderTabs()}
      </div>
    </div>
  );
}
