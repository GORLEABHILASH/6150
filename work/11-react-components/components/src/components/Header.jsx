import GlobalNav from './GlobalNav';
import './Header.css';
import Home from './Home'
import About from './About'
import MainArea from './MainArea'; 
import { useState } from 'react';

import snowbengal from '../assets/snowbengal.avif';
import sleepycat from '../assets/sleepycat.avif';
import cutecat from '../assets/cutecat.avif';

function Header({go,page}) {

   
   
    return (
        <div>
    <header className="header">
        <img 
         src={sleepycat}
         className="header__logo"
         alt="cat sleeping on the floor"
         
        />

        <h1 className="header__title">
        Cat's Chronicle
        </h1>
      
        
       
    </header>
   
     </div>
    );
}

export default Header;