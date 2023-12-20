import footermenu from '../footermenu';
import {useState} from 'react';
import './Footer.css';

function Footer() {
   
    const list = footermenu.map( item => {
        return (
        
        <li className="footer-nav__item" key={item.name}>
            <a className="footer-nav__link" href={item.path}>{item.name}</a>
        </li>
        );
        });
    return (
        <footer className = "footer">
        <nav className={`footer-nav`}>
          
            <ul className={`footer-nav__list`}>{ list }</ul>
            
        </nav> 
        </footer>
    );
}

export default Footer;




