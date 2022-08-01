console.log('login.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

console.log('scripts success');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);



$('email').addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            qs('.front-errors').innerHTML = 'Debe ingresar su email'
                break;
        case !regExEmail.test(this.value.trim()):
            qs('.front-errors').innerHTML = 'El email tiene un formato incorrecto'
                break; 
        default: 
            this.classList.remove('front-errors');
            qs('.front-errors').innerHTML = null
                break;
    }
})

$('password').addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            qs('.front-errors').innerHTML = 'Debe ingresar su contraseña'
                break;
        default: 
            this.classList.remove('front-errors');
            qs('.front-errors').innerHTML = null
                break;
    }
})

qs('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let elements = e.target.elements;
    let error = false;
    console.log(elements)
    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value.trim()){
            elements[i].classList.add('.front-errors');
            error = true;
            qs('.front-errors').innerHTML = "Los campos señalados son obligatorios"
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('.front-errors')){
            error = true
        }
    }

    !error && e.target.submit()
})