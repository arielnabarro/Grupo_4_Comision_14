const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

  regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
  regExEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

window.addEventListener("load", () => {
  
  qs("#title").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__title-edit").innerHTML =
          "Debe ingresar un título para el producto";
        qs("#title").classList.add("front-errors");
        break;
      case this.value.trim().length < 5:
        qs("#small__product__title-edit").innerHTML =
          "El título debe tener 5 caracteres o más";
        qs("#title").classList.add("front-errors");
        break;
      case this.value.trim().length >= 5:
        qs("#small__product__title-edit").innerHTML = null;
        qs("#title").classList.remove("front-errors");
        break;
      default:
        qs("#title").classList.remove("front-errors");
        qs("#small__product__title-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  qs("#price").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__price-edit").innerHTML =
          "Debe ingresar un precio para el producto";
        qs("#price").classList.add("front-errors");
        break;
      case this.value.trim() < 1:
        qs("#small__product__price-edit").innerHTML =
          "El precio no puede ser menor a 1";
        qs("#price").classList.add("front-errors");
        break;
      default:
        qs("#price").classList.remove("front-errors");
        qs("#small__product__price-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  qs("#quantity").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__quantity-edit").innerHTML =
          "Debe ingresar una cantidad para el producto";
        qs("#quantity").classList.add("front-errors");
        break;
      case this.value.trim() < 1:
        qs("#small__product__quantity-edit").innerHTML =
          "La cantidad no puede ser menor a 1";
        qs("#quantity").classList.add("front-errors");
        break;
      default:
        qs("#quantity").classList.remove("front-errors");
        qs("#small__product__quantity-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  qs("#description-text").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__description-edit").innerHTML =
          "Debe ingresar una descripción para el producto";
        qs("#description-text").classList.add("front-errors");
        break;
      case this.value.trim().length < 20:
        qs("#small__product__description-edit").innerHTML =
          "La descripción no puede contener menos de 20 caracteres";
        qs("#description-text").classList.add("front-errors");
        break;
      default:
        qs("#description-text").classList.remove("front-errors");
        qs("#small__product__description-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  qs("#image").addEventListener("change", (e) => {
    switch (true) {
      case this.value:
        let reader = new FileReader();
        reader.readAsDataURL(e.target.file);
        reader.onload = () => {
          qs("#image").src = reader.result;
        };
        break;
      default:
        qs("#image").classList.remove("front-errors");
        qs("#small__product__image-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });
let formulario = qs('form')
  formulario.addEventListener("submit", (e) => {
    let elements = formulario.elements;
    e.preventDefault();
    
    console.log(elements);
    let error = false;
    for (let i = 0; i < elements.length - 2; i++) {
      if (!elements[i].value.trim() || elements[i].classList.contains("front-errors")) {
        elements[i].classList.add("front-errors");
        elements[i].style.border = "solid 1px red";
        error = true;
        qs(".front-errors-global").innerHTML =
          "Los campos señalados son obligatorios";
      } else {
        elements[i].classList.remove("front-errors");
        elements[i].style.border = "solid 1px green";
        elements[i].classList.add("front-errors-good");
        qs(".front-errors").innerHTML = null;
        error = false;
      }
    }

    /* for (let i = 0; i < elements.length - 2; i++) {
      if (elements[i].classList.contains("front-errors")) {
        elements[i].style.border = "solid 1px red";
        error = true;
      } else {
        elements[i].classList.remove("front-errors");
        qs(".front-errors").innerHTML = null;
        error = false;
      }
    } */

    !error && e.target.submit();
  });
});
