const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);


let $registerForm = qs('.register_form'),
        
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
        regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
        errores
        

console.log('scripts success');


window.addEventListener('load', () => {
    qs('#name').addEventListener('blur', function() {
        switch(true) {
            case !this.value.trim():
                qs('.front-errors').innerHTML = 'Debe ingresar su nombre'
                qs('#name').classList.add('front-errors');
                    break;
            case this.value.trim():
                qs('.front-errors').innerHTML = null;
                qs('#name').classList.remove('front-errors');
                    break;         
            default: 
                this.classList.remove('front-errors');
                this.classList.remove('front-errors-good');
                qs('.front-errors').innerHTML = null
                    break;
        }
    })

    qs('#email').addEventListener('blur', function() {
    switch(true) {
        case !regExEmail.test(this.value.trim()):
            qs('.front-errors').innerHTML = 'El email tiene un formato incorrecto'
            qs('#email').classList.remove('front-errors-good');
            qs('#email').classList.add('front-errors');
            break; 
        case regExEmail.test(this.value.trim()):
            $emailError.innerHTML = null
            $email.classList.remove(frontErrors);
            $email.style.border = 'solid 1px green'
            break;    
        }
    })
    


$password.addEventListener('blur', function() {
    switch(true) {
        case !this.value.trim():
            $passwordError.innerHTML = 'Debe ingresar su contraseña'
            $password.classList.add(frontErrors);
                break;

        case this.value.trim().length < 6:
            $passwordError.innerHTML = 'La contraseña debe tener entre 6 y 12 caracteres'
            $password.classList.add(frontErrors);
                break;
        case this.value.trim().length > 5:
            $passwordError.innerHTML = null
            $password.classList.remove(frontErrors);
                break;
        default: 
            this.classList.remove(frontErrors);
            $passwordError.innerHTML = null
                break;
    }
})

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let elements = e.target.elements;
    let error = false;
    console.log(elements)
    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value.trim()){
            elements[i].classList.add('.front-errors-global');
            error = true;
            qs('.front-errors-global').innerHTML = "Los campos señalados son obligatorios"
        }
        else {
            elements[i].classList.remove('.front-errors-global');
            qs('.front-errors-global').innerHTML = null;
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('.front-errors-global')){
            $email.style.border = 'solid 1px red'
            $password.style.border = 'solid 1px red'
            error = true
        }
        else {
            $email.style.border = 'solid 1px green'
            $password.style.border = 'solid 1px green'
            elements[i].classList.remove('.front-errors-global');
            qs('.front-errors-global').innerHTML = null;
            error = false
        }
    }

    !error && e.target.submit()
})

})