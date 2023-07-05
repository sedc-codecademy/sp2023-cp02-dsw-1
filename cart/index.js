const cart = document.querySelector(".emptyCart");
const allProductsContent = document.querySelector(".products");
const userCartDiv = document.querySelector(".userCart");
const totalElement = document.querySelector(".totalCartPrice");

let total = 0;

//Functions for fetching and rendering products
async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = createProductElement(product);
    allProductsContent.append(productElement);
  }
}
//Creating the product element
function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.innerHTML = `
    <div class="productDiv">
      <div class="product">
        <p class="product_title"><b>${product.title}</b></p>
        <div class="img">
        <img src="${product.image}" alt="item_image" class="product_img" width="50px"/>
        </div>
        <p class="product-price"><b>$ ${product.price}</b></p>
        <div class="btn-div">
        <button class="addToCartButton" type="button">Add to cart</button>
        </div>
      </div>
    </div>`;

  const addToCartButton = productElement.querySelector(".addToCartButton");
  addToCartButton.addEventListener("click", () => {
    addToCart(product);
  });

  return productElement;
}

function addToCart(product) {
  const { title, image, price } = product;

  const itemElement = document.createElement("div");
  itemElement.innerHTML = `
    <div class="itemToCart">
      <div class="productFromCart">
        <p><b>${title}</b></p>
        <div class="img">
        <img src="${image}" alt="item_image" width="50px" />
        </div>
        <p><b>$${price}</b></p>
        <div class="btn-div">
        <button type="button" class="removeButton">Remove from cart</button>
        </div>
      </div>
    </div>`;

  userCartDiv.appendChild(itemElement);

  const removeButton = itemElement.querySelector(".removeButton");
  removeButton.addEventListener("click", () => {
    itemElement.remove();
    const itemPrice = parseFloat(getPriceValue(price));
    total -= itemPrice;
    updateTotal();
    checkCart();
  });

  const itemPrice = parseFloat(getPriceValue(price));
  total += itemPrice;
  updateTotal();
  checkCart();
}

function getPriceValue(price) {
  if (typeof price === "string") {
    return price.replace("$", "");
  }
  return price;
}

//Checking for updates in cart status depending on the amount of products in the cart
function checkCart() {
  const cartItems = document.querySelectorAll(".itemToCart");
  const cartMessage = document.querySelector(".emptyCart");

  if (cartItems.length > 0) {
    cartMessage.innerHTML = "Added to cart";
  } else {
    cartMessage.innerHTML = "Your cart is currently empty!";
  }
}

//Updating the total
function updateTotal() {
  const formattedTotal = Math.floor(total * 100) / 100;
  totalElement.innerHTML = `Total: $${formattedTotal}`;
}

//Fetching the products
fetchProducts("https://fakestoreapi.com/products");
