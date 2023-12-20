import menu from '../menu';
import { useState } from 'react';
import './GlobalNav.css';
import Button from './Button';
import './Button.css';

function GlobalNav({ className,go}) {
  

  return (
    <nav className={`global-nav ${className}`}>
      <ul className='global-nav__list'>
        <li className='global-nav__item'>
          <Button type="button" visual="link" onClick={(e) => go(e, "Home")}>
            Home
          </Button>
        </li>
        <li className='global-nav__item'>
          <a className='global-nav__link' href="" onClick={(e) => go(e, "About")}>
            About
          </a>
        </li>
        <li className='global-nav__item'>
          <a className='global-nav__link' href="" onClick={(e) => go(e, "Cats")}>
            Cats
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalNav;
