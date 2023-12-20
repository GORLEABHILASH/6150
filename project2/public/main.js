"use strict";

(function(){


  const registerformEl = document.querySelectorAll('.registar-form');
  const emailEl = document.querySelectorAll('.registar-form__input--email');
  const confirmemailEl= document.querySelectorAll('.registar-form__input--confirm-email');


    
    
   
    registerformEl.forEach((registerform,index) => {
    registerform.addEventListener('submit',(e) =>{
        let isInvalid = false;
       
      
       
        const email = emailEl[index].value;
        const confirmemail =  confirmemailEl[index].value;

        const emailError = registerform.querySelector('.registar-form__error--email'); 
        const confirmemailError = registerform.querySelector('.registar-form__error--confirm-email');

        // Reset error messages before validating
      emailError.innerText = '';
      confirmemailError.innerText = '';
      
        if(!email){
            isInvalid = true;
            console.log('Email is required');

            
            emailError.innerText= "This field is required";

        } else if (!email.includes('@')) {
          isInvalid = true;
          emailError.innerText = 'This field be a valid email address including a @';
          confirmemailError.innerText= "";
        }  else if(email!== confirmemail)
        {
            isInvalid = true;
            console.log('Email and Confirm Email should match');

            
            confirmemailError.innerText= "This field must match the provided email address";

        }

       

        if(isInvalid){
            e.preventDefault();
        }



    });
  });



    emailEl.forEach((email1,index) => {
    email1.addEventListener('input',(e) =>{
        const emailError = registerformEl[index].querySelector('.registar-form__error--email'); // Find elements within the current form
        const email = e.target.value;
        if(!email){
            emailError.innerText = "Email is required";
            
        } else{
            emailError.innerText = "";
          
        }

    });
  });



  const openButtons = document.querySelectorAll('.open');
  const closeButtons = document.querySelectorAll('.close');

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
      const modal = openButton.closest('.card').querySelector('.modal');
      modal.showModal();
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      const modal = closeButton.closest('.modal');
      modal.close();
    });
  });

  const navSubmenu = document.querySelector('.nav-submenu');
  const navmenuButton = document.querySelector('.nav-menu__button');

  navmenuButton.addEventListener('click',function(){
    navSubmenu.classList.toggle('open');

  });



})();

