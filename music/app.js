const mainBody = document.querySelector(".main");
const guitars = document.querySelector(".guitars");
const cardSection = document.querySelector(".card-section");
const bassGuitars = document.querySelector(".bass-guitars");
const keys = document.querySelector(".keys");
const drums = document.querySelector(".drums");
const microphones = document.querySelector(".microphones");
const allProducts = document.querySelector(".all-products");
const quantityElement = document.querySelector(".quantity-number");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const totalPrice = document.querySelector(".total-price");
const produtCardDetails = document.querySelector(".product-card-details");
const productInfoContainer = document.querySelector(".container");
const filteredArray = [];
const data = [];

const displayData = (data) => {
  data
    .map((products) => {
      if (products.subCategory == "music-instruments") {
        const productDiv = document.createElement("div");
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

const allProductsButton = (productsData) => {
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(productsData);
  });
};

const guitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "guitar");
  guitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // guitars.classList.add("clickedButton");
  });
};

const bassGuitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "bass-guitar");
  bassGuitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // bassGuitars.classList.add("clickedButton");
  });
};

const keysButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "keys");
  keys.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // keys.classList.add("clickedButton");
  });
};

const drumsButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "drums");
  drums.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // drums.classList.add("clickedButton");
  });
};

const microphonesButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "microphones");
  microphones.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    // microphones.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("../db/products.json");
    const data = await res.json();
    microphonesButton(data);
    drumsButton(data);
    keysButton(data);
    bassGuitarButton(data);
    guitarButton(data);
    displayData(data);
    allProductsButton(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);

const ProductInfo = (product) => {
  mainBody.style.display = "none";
  productInfoContainer.style.display = "block";
  document.querySelector(".back-button").addEventListener("click", () => {
    mainBody.style.display = "flex";
    productInfoContainer.style.display = "none";
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
  });
};
