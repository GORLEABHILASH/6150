"use strict";

(function(){
    const registerformEl = document.querySelector('.registar-form');
    const usernameEl = document.querySelector('.registar-form__input--name');
    const emailEl = document.querySelector('.registar-form__input--email');
    const confirmemailEl= document.querySelector('.registar-form__input--confirm-email');
    const usernameError = document.querySelector('.registar-form__error--name');
    const emailError = document.querySelector('.registar-form__error--email');
    const confirmemailError = document.querySelector('.registar-form__error--confirm-email');
    
    
   
    
    registerformEl.addEventListener('submit',(e) =>{
        let isInvalid = false;
        usernameError.classList.remove('registar-form__Invalid');
        const username = usernameEl.value;
        const email = emailEl.value;
        const confirmemail =  confirmemailEl.value;
        if(!username){
            isInvalid = true;
            console.log('Username is required');
            usernameError.classList.add('registar-form__Invalid');

        } 
        if(!email){
            isInvalid = true;
            console.log('Email is required');

            
            emailError.innerText= "Email is required";

        }

        if(!confirmemail){
            isInvalid = true;
            console.log('confirm Email is required');

            
            confirmemailError.innerText= "Confirm Email is required";

        }

        if(email!== confirmemail)
        {
            isInvalid = true;
            console.log('Email and Confirm Email should match');

            
            confirmemailError.innerText= "Email and Confirm Email should match";

        }

        if(isInvalid){
            e.preventDefault();
        }



    });

    usernameEl.addEventListener('input',(e) =>{
        const username = e.target.value;
        if(!username){
            usernameError.classList.add('registar-form__Invalid');
        } else{
            usernameError.classList.remove('registar-form__Invalid')
        }

    });


    emailEl.addEventListener('input',(e) =>{
        const email = e.target.value;
        if(!email){
            emailError.innerText = "Email is required";
        } else{
            emailError.innerText = "";
        }

    });


    confirmemailEl.addEventListener('input',(e) =>{
        const confirmemail = e.target.value;
        if(!confirmemail){
            confirmemailError.innerText = "Confirm Email is required";
        } else{
            confirmemailError.innerText = "";
        }

    });



})();