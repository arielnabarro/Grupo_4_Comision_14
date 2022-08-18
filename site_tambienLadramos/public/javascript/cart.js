const removeItem = (id) => {
  console.log(cart);

  cart = cart.filter((element) => element.id != id);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart(cart);
};

const upQuantity = (id) => {
  cart = cart.map((item) => {
    if (item.id == id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart(cart);
};

const downQuantity = (id) => {
  let itemCart = cart.find((item) => item.id == id);
  if (itemCart.quantity == 1) {
    removeItem(id);
  } else {
    cart = cart.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    showCart(cart);
  }
};

const showCart = (cart) => {
  document.getElementById("totalItems").textContent = cart.length;
  document.getElementById("countItems").innerText = cart.length;
  document.getElementById("cart-body").innerHTML = null;
  if (cart.length > 0) {

    let subtotal = cart.map(item => +item.price * +item.quantity);

    let total = subtotal.reduce((acum,num) => acum + num);
    console.log(total);

    document.getElementById('amountProducts').textContent = total;
    document.getElementById('amountTotal').textContent = total;

    cart.forEach(({ id, image, title, price, weight, quantity }) => {
      document.getElementById("cart-body").innerHTML += `
  <div class="row">
  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
          <img src="/images/Alimento-balanceado/${image}" alt="" class="w-75" alt="Blue Jeans Jacket"/>
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      </a>
    </div>
  </div>
  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
    <p><strong>${title}</strong></p>
    <p>Peso: <span>${weight}</span>kg</p>
    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
      title="Remove item"  onclick="removeItem(${id})">
      <i class="fas fa-trash"></i>
    </button>
    <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
      title="Move to the wish list">
      <i class="fas fa-heart"></i>
    </button>
  </div>
  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
    <div class="d-flex align-items-center mb-4" style="max-width: 300px">
      <button class="btn btn-primary px-3 me-2"
        onclick="this.parentNode.querySelector('input[type=number]').stepDown();downQuantity(${id})">
        <i class="fas fa-minus"></i>
      </button>
      <div class="form-outline">
        <input id="form1" min="1" readonly name="quantity" value="${quantity}" type="number" class="form-control" />
      </div>
      <button class="btn btn-primary px-3 ms-2"
        onclick="this.parentNode.querySelector('input[type=number]').stepUp();upQuantity(${id})">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <p class="text-start text-md-center">
      <strong>$ <span class="fs-3">${price * quantity}</span> </strong>
    </p>
  </div>
  <hr class="my-4"/>
</div>
  `;
    });
  } else {
    document.getElementById('amountProducts').textContent = 0;
    document.getElementById('amountTotal').textContent = 0;
    document.getElementById("cart-body").innerHTML =
      '<p class="alert alert-danger">No hay productos en el carrito</p>';
  }
};

window.addEventListener("load", () => {
  console.log("cart.js connected");
  var cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  showCart(cart);
});
