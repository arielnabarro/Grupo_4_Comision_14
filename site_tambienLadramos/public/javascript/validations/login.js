const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);


let $loginForm = qs('.login-form'),
        $email = qs('#email'),
        $password = qs('#password'),
        $emailError = qs('#small__login-email'),
        $passwordError = qs('#small__login-password'),
        frontErrors = qsa('.front-errors'), 
        frontGoods = qsa('.front-errors-good'), 
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
        regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
        errores
        

console.log('scripts success');


window.addEventListener('load', () => {
    $email.addEventListener('blur', function() {
        switch(true) {
            case !this.value.trim():
                $emailError.innerHTML = 'Debe ingresar su email'
                $email.classList.add('frontErrors');
                    break;
            case this.value.trim():
                $emailError.innerHTML = null;
                $email.classList.remove('frontErrors');
                    break;
            case !regExEmail.test(this.value.trim()):
                $emailError.innerHTML = 'El email tiene un formato incorrecto'
                $email.classList.remove(frontGoods);
                $email.classList.add(frontErrors);
                break; 
            case regExEmail.test(this.value.trim()):
                $emailError.innerHTML = null
                $email.classList.remove(frontErrors);
                $email.style.border = 'solid 1px green'
                break;             
            default: 
                this.classList.remove(frontErrors);
                this.classList.remove(frontGoods);
                $emailError.innerHTML = null
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