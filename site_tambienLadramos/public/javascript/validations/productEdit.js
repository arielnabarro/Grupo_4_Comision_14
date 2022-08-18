const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let $registerForm = qs(".register_form"),
  regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
(regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/),
  (regExEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/);

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

  qs("#id_brand").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__brand-edit").innerHTML =
          "Debe seleccionar una marca para el producto";
        qs("#id_brand").classList.add("front-errors");
        break;
      default:
        qs("#id_brand").classList.remove("front-errors");
        qs("#small__product__brand-edit").innerHTML = null;
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

  qs("#weight").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__weight-edit").innerHTML =
          "Debe ingresar un peso para el producto";
        qs("#weight").classList.add("front-errors");
        break;
      case this.value.trim() < 1:
        qs("#small__product__weight-edit").innerHTML =
          "La cantidad no puede ser menor a 1";
        qs("#weight").classList.add("front-errors");
        break;
      default:
        qs("#weight").classList.remove("front-errors");
        qs("#small__product__weight-edit").innerHTML = null;
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

  qs("#id_category").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__category-edit").innerHTML =
          "Debe seleccionar una categoría para el producto";
        qs("#id_category").classList.add("front-errors");
        break;
      default:
        qs("#id_category").classList.remove("front-errors");
        qs("#small__product__category-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  qs("#descript").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        qs("#small__product__description-edit").innerHTML =
          "Debe ingresar una descripción para el producto";
        qs("#descript").classList.add("front-errors");
        break;
      case this.value.trim().length < 20:
        qs("#small__product__description-edit").innerHTML =
          "La descripción no puede contener menos de 20 caracteres";
        qs("#descript").classList.add("front-errors");
        break;
      default:
        qs("#descript").classList.remove("front-errors");
        qs("#small__product__description-edit").innerHTML = null;
        qs(".front-errors").innerHTML = null;
        break;
    }
  });

  // qs("#image").addEventListener("change", () => {
  //   if (!regExExtensions.exec(image.value)) {
  //     qs("#image").value = "";
  //     qs("#image").classList.add("front-errors");
  //     qs("small__product__image-edit").innerHTML =
  //       "La imagen debe tener alguna de las siguientes extensiones: (.jpg / .jpeg / .png / .gif)";
  //     error = true;
  //   } else {
  //     qs("#image").classList.remove("front-errors");
  //     qs("#image").classList.add("front-errors-good");
  //     qs("small__product__image-edit").innerHTML = "";
  //     error = false;
  //   }
  // });

  /* qs('#image2').addEventListener('blur', (e) => {
  switch (true) {
        case !this.value:
          break;

      default:
          qs("#image").classList.remove("front-errors");
          qs("#small__product__image-edit").innerHTML = null;
          qs(".front-errors").innerHTML = null;
          break;
  } 
}); */

  qs("#product__edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let error = false;
    console.log(elements);
    for (let i = 0; i < elements.length - 3; i++) {
      if (!elements[i].value.trim()) {
        elements[i].classList.add("front-errors");
        qs(".front-errors-global").innerHTML =
          "Los campos señalados son obligatorios";
          error = true;
      } else {
        elements[i].classList.remove("front-errors");
        elements[i].style.border = "solid 1px green";
        elements[i].classList.add("front-errors-good");
      }
    }

    for (let i = 0; i < elements.length - 3; i++) {
      if (elements[i].classList.contains("front-errors")) {
        elements[i].style.border = "solid 1px red";
        error = true;
      } else {
        elements[i].classList.remove("front-errors");
        qs(".front-errors").innerHTML = null;
        error = false;
      }
    }

    !error && e.target.submit();
  });
});
