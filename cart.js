let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cartItems");
let total = 0;

function renderCart() {
  container.innerHTML = "";
  total = 0;

  cart.forEach((p, index) => {
    total += p.price;
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(i) {
  cart.splice(i, 1);
  renderCart();
}

renderCart();
