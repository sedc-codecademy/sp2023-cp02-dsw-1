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

//
//
//
//
//
// NAV SECTION
const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-bar");
const searchBtnPhone = document.querySelector(".search-btn-phone");
const searchInputPhone = document.querySelector(".search-bar-phone");
const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".categories-and-deals-list-phone");
const categoriesButton = document.querySelector(".categories-phone-link");
const showSearchButton = document.querySelector(".search-button-phone");
const searchDisplay = document.querySelector(".search-display-phone");

searchInputPhone.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInputPhone.value.toLowerCase();
    window.open(`../${url}/index.html`);
  }
});

searchBtnPhone.addEventListener("click", () => {
  const url = searchInputPhone.value.toLowerCase();
  window.open(`../${url}/index.html`);
});

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInput.value.toLowerCase();
    window.open(`../${url}/index.html`);
  }
});

searchBtn.addEventListener("click", () => {
  const url = searchInput.value.toLowerCase();

  window.open(`../${url}/index.html`);
});

const menuDisplay = () => {
  searchDisplay.style.display = "none";

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  menu.innerHTML = `
  <li class="phone-menu-item">
 <div class="categories-menu-phone">
   <ul class="categories-ul-phone">
     <li>
       <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
     </li>
   </ul>
 </div>
</li>
<li class="phone-menu-item middle-item"><a href="../deals/index.html">Deals</a></li>
<li class="phone-menu-item"><a href="../contact/index.html">Contact</a></li>
</ul>`;
};

const collapseMenu = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  }
  menu.innerHTML = `
   <li class="phone-menu-item">
  <div class="categories-menu-phone">
    <ul class="categories-ul-phone">
      <li>
        <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
      </li>
    </ul>
  </div>
</li>
<li class="phone-menu-item middle-item"><a href="../deals/index.html">Deals</a></li>
<li class="phone-menu-item"><a href="../contact/index.html">Contact</a></li>
</ul>`;
};

const showCategories = () => {
  menu.innerHTML = `  
  <svg class="back-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" ></path></svg>
  <li class="dropdown-li-phone border-dropdown"><a href="../clothes/index.html">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../shoes/index.html">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../jewellery/index.html">Jewellery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../electronics/index.html">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../music/index.html">Music</a></li>
  <li class="dropdown-li-phone"><a href="../furniture/index.html">Furniture</a></li>`;

  const backArrow = document.querySelector(".back-arrow");

  backArrow.addEventListener("click", () => {
    menu.innerHTML = `
    <li class="phone-menu-item">
   <div class="categories-menu-phone">
     <ul class="categories-ul-phone">
       <li>
         <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
       </li>
     </ul>
   </div>
  </li>
  <li class="phone-menu-item middle-item"><a href="../deals/index.html">Deals</a></li>
  <li class="phone-menu-item"><a href="../contact/index.html">Contact</a></li>
  </ul>`;
  });
};

const showSearch = () => {
  menu.style.display = "none";

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  } else {
    searchDisplay.style.display = "block";
  }
};
