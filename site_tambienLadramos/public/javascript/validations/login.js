const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let $loginForm = qs(".login-form"),
  $email = qs("#email"),
  $password = qs("#password"),
  $emailError = qs("#small__login-email"),
  $passwordError = qs("#small__login-password"),
  frontErrors = qs(".front-errors"),
  frontGoods = qs(".front-errors-good"),
  regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
  regExEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

window.addEventListener("load", () => {
  $email.addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $emailError.innerHTML = "Debe ingresar su email";
        $email.classList.contains(frontErrors) ? null : $email.classList.add(frontErrors) ;
        break;
      case this.value.trim():
        $emailError.innerHTML = null;
        $email.classList.remove(frontErrors);
        break;
      case !regExEmail.test(this.value.trim()):
        $emailError.innerHTML = "El email tiene un formato incorrecto";
        $email.classList.remove(frontGoods);
        $email.classList.add(frontErrors);
        
        break;
      case regExEmail.test(this.value.trim()):
        $emailError.innerHTML = null;
        $email.classList.contains(frontErrors) ? $email.classList.remove(frontErrors) : null;
        $email.classList?.add(frontGoods);
        break;
      default:
        this.classList.remove(frontErrors);
        this.classList.remove(frontGoods);
        $emailError.innerHTML = null;
        break;
    }
  });

  $password.addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $passwordError.innerHTML = "Debe ingresar su contraseña";
        $password.classList.add(frontErrors);
        break;
    case this.value.trim():
        $passwordError.innerHTML = null;
        $password.classList.remove(frontErrors);
        break;
      default:
        this.classList.remove(frontErrors);
        $passwordError.innerHTML = null;
        break;
    }
  });

  $loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    console.log(elements)
    let error = false;
    for (let i = 0; i < elements.length - 2; i++) {
      if (!elements[i].value.trim()) {
        elements[i].classList.add("front-errors");
        elements[i].style.border = "1px solid red"
        qs(".front-errors-global").innerHTML =
          "Los campos señalados son obligatorios";
        error = true;
      } else {
        elements[i].classList.remove("front-errors");
        error = false;
      }
    }

    /* for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('.front-errors-global')){
            elements[i].style.border = 'solid 1px red'
            error = true
        }
        else {
            elements[i].style.border = 'solid 1px green'
            elements[i].classList.remove('.front-errors-global');
            qs('.front-errors-global').innerHTML = null;
            error = false
        }
    } */

    !error && e.target.submit();
  });
});
