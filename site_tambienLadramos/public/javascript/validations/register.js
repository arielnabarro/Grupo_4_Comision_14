const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let $registerForm = qs('.register_form'),
  regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
  regExEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/


window.addEventListener('load', () => {
  qs('#name').addEventListener('blur', function () {
    switch (true) {
      case !this.value.trim():
        qs('#small__register-name').innerHTML = 'Debe ingresar su nombre';
        qs('#name').classList.add('front-errors');
        break;
      case this.value.trim():
        qs('#small__register-name').innerHTML = null;
        qs('#name').classList.remove('front-errors');
        break;
      case this.value.trim().length < 3:
        qs('#small__register-name').innerHTML =
          'El nombre no puede tener menos de 3 caracteres';
        qs('#name').classList.remove('front-errors');
        break;
      default:
        this.classList.remove('#small__register-name');
        qs('#name').classList.remove('front-errors');
        qs('#small__register-name').innerHTML = null;
        qs('.front-errors').innerHTML = null;
        break;
    }
  });

  qs('#last_name').addEventListener('blur', function () {
    switch (true) {
      case !this.value.trim():
        qs('#small__register-last_name').innerHTML =
          'Debe ingresar su apellido';
        qs('#last_name').classList.add('front-errors');
        break;
      case this.value.trim():
        qs('#small__register-last_name').innerHTML = null;
        qs('#last_name').classList.remove('front-errors');
        break;
      case this.value.trim().length < 3:
        qs('#small__register-last_name').innerHTML =
          'El apellido no puede tener menos de 3 caracteres';
        qs('#last_name').classList.remove('front-errors');
        break;
      default:
        this.classList.remove('front-errors');
        qs('#small__register-last_name').innerHTML = null;
        break;
    }
  });

  qs('#email').addEventListener('blur', function () {
    switch (true) {
      case !this.value.trim():
        qs('#small__register-email').innerHTML = 'Debe ingresar su email';
        qs('#email').classList.add('frontErrors');
        break;
      case !regExEmail.test(this.value.trim()):
        qs('#small__register-email').innerHTML =
          'El email tiene un formato incorrecto';
        qs('#email').classList.remove('front-errors');
        qs('#email').classList.add('front-errors');
        break;
      case regExEmail.test(this.value.trim()):
        qs('#small__register-email').innerHTML = null;
        qs('#email').classList.remove('front-errors');
        break;
      default:
        qs('.front-errors').innerHTML = null;
        qs('#small__register-email').innerHTML = null;
        qs('#email').classList.remove('front-errors');
        this.classList.remove('front-errors-good');
        this.classList.remove('front-errors');
        break;
    }
  });

  qs('#password').addEventListener('blur', function () {
    switch (true) {
      case !this.value.trim():
        qs('#small__register-password').innerHTML =
          'Debe ingresar su contraseña';
        qs('#password').classList.add('front-errors');
        break;
      case this.value.trim().length < 8 || this.value.trim().length > 12:
        qs('#small__register-password').innerHTML =
          'La contraseña debe tener entre 8 y 12 caracteres';
        qs('#password').classList.add('front-errors');
        break;
      case this.value.trim().length > 7 && this.value.trim().length < 13:
        qs('#small__register-password').innerHTML = null;
        qs('#password').classList.remove('#small__register-password');
        qs('#password').classList.remove('front-errors');
        break;
      default:
        this.classList.remove('front-errors');
        qs('#small__register-password').innerHTML = null;
        break;
    }
  });

  qs('#password2').addEventListener('blur', function () {
    switch (true) {
      case !this.value.trim():
        qs('#small__register-password2').innerHTML = 'Debe repetir la contraseña ingresada';
        qs('#password2').classList.add('front-errors');
        break;
    case this.value.trim() !== qs('#password').value.trim():
        qs('#small__register-password2').innerHTML = 'Las contraseñas no tienen la misma cantidad de caracteres';
        qs('#password2').classList.add('front-errors');
        break;
      default:
        this.classList.remove('front-errors');
        qs('#small__register-password2').innerHTML = null;
        break;
    }
  });

  $registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    let error = false;
    for (let i = 0; i < elements.length - 2; i++) {
      if (!elements[i].value.trim()) {
        elements[i].classList.add('front-errors');
        error = true;
        qs('.front-errors-global').innerHTML =
          'Los campos señalados son obligatorios';
      } else {
        elements[i].classList.remove('front-errors');
        elements[i].style.border = 'solid 1px green'
        elements[i].classList.add('front-errors-good');
      }
    }

    for (let i = 0; i < elements.length - 2; i++) {
      if (elements[i].classList.contains('front-errors')) {
        elements[i].style.border = 'solid 1px red'
        error = true;
      } else {
        elements[i].classList.remove('front-errors');
        qs('.front-errors').innerHTML = null;
        error = false;
      }
    }

    !error && e.target.submit();

    
  });

 
 
});
