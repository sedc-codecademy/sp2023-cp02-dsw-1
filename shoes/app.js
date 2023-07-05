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
      if (products.subCategory == "shoes") {
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
  categoryFilter(filteredArray, productsData, "woman");
  womanCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // womanCategory.classList.add("clickedButton");
  });
};

const kidsCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "kids");
  kidsCategory.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // kidsCategory.classList.add("clickedButton");
  });
};

const mensCategoryButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "men's");
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
