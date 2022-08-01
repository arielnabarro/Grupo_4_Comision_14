console.log('register.js success!');
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

console.log('scripts success');

const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

$('name').addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            qs('#front-errors-register-name').innerHTML = 'Debe ingresar su nombre'
                break;
        case this.value.trim().length < 2:
            qs('#front-errors-register-name').innerHTML = 'El nombre no puede tener menos de 2 caracteres'
                break;
        default: 
            this.classList.remove('front-errors');
            qs('#front-errors-register-name').innerHTML = null
                break;
    }
})

$('last_name').addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            qs('#front-errors-register-lastname').innerHTML = 'Debe ingresar su apellido'
                break;
        case this.value.trim().length < 2:
            qs('#front-errors-register-lastname').innerHTML = 'El apellido no puede tener menos de 2 caracteres'
                break;
        default: 
            this.classList.remove('front-errors');
            qs('#front-errors-register-lastname').innerHTML = null
                break;
    }
})

$('email').addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            qs('#front-errors-register-email').innerHTML = 'Debe ingresar su email'
                break;
        case !regExEmail.test(this.value.trim()):
            qs('#front-errors-register-email').innerHTML = 'El email tiene un formato incorrecto'
                break; 
        default: 
            this.classList.remove('front-errors');
            qs('#front-errors-register-email').innerHTML = null
                break;
    }
})

$('password').addEventListener('blur', function() {
    switch(true) {
        case !this.value:
            qs('#front-errors-register-password').innerHTML = 'Debe ingresar su contraseña'
                break;
        case this.value.length < 6:
            qs('#front-errors-register-password').innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres'
                break;            
        default: 
            this.classList.remove('front-errors');
            qs('#front-errors-register-password').innerHTML = null
                break;
    }
})

$('password2').addEventListener('blur', function() {
    switch(true) {
        case this.value:
            qs('#front-errors-register-password2').innerHTML = 'Debe ingresar su contraseña'
                break;
        case this.value !== qs('#password'):
            qs('#front-errors-register-password2').innerHTML = 'Las contraseñas deben ser identicas'
                break;
        default: 
            this.classList.remove('front-errors');
            qs('#front-errors-register-password2').innerHTML = null
                break;
    }
})

qs('.register_form').addEventListener('submit', (e) => {
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