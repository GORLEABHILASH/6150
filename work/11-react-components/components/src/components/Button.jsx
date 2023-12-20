import React from 'react';
import { useState } from 'react';
const Button = ({ type = 'button', visual = 'button', card ='no' ,onClick, children }) => {

    const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
    onClick && onClick();

    setTimeout(() => {
        setButtonClicked(false);
      }, 2000);
  };
 

  return (
    <>
    <button type={type} onClick={handleClick} className={`custom-button ${visual} ${type} ${card}` }>
    {children}
  </button>
   {buttonClicked && <p className="button-message">You clicked the button (Visual:{visual} , Type: {type})!</p>}
   </>
  );
};

export default Button;
