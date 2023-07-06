const mainBody = document.querySelector(".main");
const womanCategory = document.querySelector(".woman");
const cardSection = document.querySelector(".card-section");
const kidsCategory = document.querySelector(".kids");
const mensCategory = document.querySelector(".mens");
const allProducts = document.querySelector(".all-products");
const burgerMenuButton = document.querySelector(".burger-menu");
const cancelButton = document.querySelector(".cancel-button");
const quantityElement = document.querySelector(".quantity-number");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const totalPrice = document.querySelector(".total-price");
const produtCardDetails = document.querySelector(".product-card-details");
const productInfoContainer = document.querySelector(".container");

const filteredArray = [];
const data = [];

const allProductsButton = (productsData) => {
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(productsData);
  });
};

const displayData = (data) => {
  data
    .map((products) => {
      if (products.subCategory == "clothes") {
        const productDiv = document.createElement("div");
        productDiv.classList.add("main-product-card-div");
        cardSection.appendChild(productDiv);
        productDiv.addEventListener("click", () => {
          ProductInfo(products);
        });
        return (productDiv.innerHTML = `
 		<div class="product-card">
     <div class="product-card-header">
         <img src="${products.image}"></img>
       </div>
     <div class="product-card-details">
 		<p>${products.title}</h>
 				<h3>${products.price} $</h3>
 		</div>
 		  </div>
 		`);
      }
    })
    .join("");
};

const categoryFilter = (filteredArray, dummyData, category) => {
  for (let product of dummyData) {
    if (product.category == category) {
      filteredArray.push(product);
    }
  }
};

const womanCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "woman-clothes");
  womanCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // womanCategory.classList.add("clickedButton");
  });
};

const kidsCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "kids-clothes");
  kidsCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // kidsCategory.classList.add("clickedButton");
  });
};

const mensCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "men's-clothes");
  mensCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // mensCategory.classList.add("clickedButton");
  });
};

burgerMenuButton.addEventListener("click", () => {
  burgerMenuButton.style.visibility = "hidden";
  cancelButton.style.visibility = "visible";
  cancelButton.addEventListener("click", () => {
    burgerMenuButton.style.visibility = "visible";
    cancelButton.style.visibility = "hidden";
    document.querySelector(".burger-menu-dropdown").style.display = "none";
  });
  document.querySelector(".burger-menu-dropdown").style.display = "flex";
});

const ProductInfo = (product) => {
  quantityElement.value = 1;
  mainBody.style.display = "none";
  productInfoContainer.style.display = "block";
  document.querySelector(".back-button").addEventListener("click", () => {
    quantityElement.value = 1;
    mainBody.style.display = "flex";
    productInfoContainer.style.display = "none";
    console.log(quantityElement.value);
  });
  totalPrice.innerHTML = product.price;
  document.querySelector(".product-title").innerHTML = product.title;
  document.querySelector(".product-description").innerHTML =
    product.description;
  document.querySelector(
    ".product-image"
  ).innerHTML = `<img src="${product.image}"/>`;

  minusButton.addEventListener("click", () => {
    if (quantityElement.value < 2) {
      minusButton.disabled = true;
    } else {
      quantityElement.value--;
    }
    totalPrice.innerHTML = product.price * quantityElement.value;
  });
  plusButton.addEventListener("click", () => {
    quantityElement.value++;
    totalPrice.innerHTML = product.price * quantityElement.value;
    minusButton.disabled = false;
    console.log(quantityElement.value);
  });
};
// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("../db/products.json");
    const data = await res.json();
    mensCategoryButton(data);
    kidsCategoryButton(data);
    womanCategoryButton(data);
    displayData(data);
    allProductsButton(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);
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

console.log(searchInputPhone);

searchInputPhone.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInput.value.toLowerCase();
    window.open(`../${url}/index.html`);
  }
});

searchBtnPhone.addEventListener("click", () => {
  const url = searchInputPhone.value;
  window.open(`../${url}/index.html`);
});

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInput.value.toLowerCase();
    console.log(url);

    window.open(`../${url}/index.html`);
  }
});

searchBtn.addEventListener("click", () => {
  const url = searchInput.value;
  console.log(url);

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
  <li class="dropdown-li-phone border-dropdown"><a href="#">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../jewellery/index.html">Jewellery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../electronics/index.html">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="../music/index.html">Music</a></li>
  <li class="dropdown-li-phone"><a href="#">Furniture</a></li>`;

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
