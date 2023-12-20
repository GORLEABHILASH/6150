import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Cats from './Cats';

function MainArea({ go,page}) {
   
  return (
    <div className="main-area">
     
        <>
          {page === 'Home' && <Home onButtonClick={(e) => go(e, 'About')} />}
          {page === 'About' && <About />}
          {page === 'Cats' && <Cats />}
        </>
  
    </div>
  );
}

export default MainArea;
