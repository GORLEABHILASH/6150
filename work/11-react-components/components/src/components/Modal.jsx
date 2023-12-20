// ModalButton.jsx
import React, { useRef } from 'react';
import Button from './Button';

const ModalButton = ({ type = 'button', visual = 'button', onClick, children }) => {
  const dialogRef = useRef();

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    
    setTimeout(() => {
        dialogRef.current.close();
      }, 2000);
  };

  const handleButtonClick = () => {
    openModal();
    onClick && onClick();
  };

  return (
    <>
      <Button type={type} visual={visual} onClick={handleButtonClick}>
        {children}
      </Button>
      <dialog className ="modal" ref={dialogRef}>
        You Clicked on Subscribe Button(Visual: "Link", Type: "Button")
        <Button type='button' visual= 'button' onClick={closeModal}>
        Close
      </Button>
      </dialog>
    </>
  );
};

export default ModalButton;
