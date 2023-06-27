const mainBody = document.querySelector(".main");
const guitars = document.querySelector(".guitars");
const cardSection = document.querySelector(".card-section");
const bassGuitars = document.querySelector(".bass-guitars");
const keys = document.querySelector(".keys");
const drums = document.querySelector(".drums");
const microphones = document.querySelector(".microphones");
const allProducts = document.querySelector(".all-products");

const filteredArray = [];
const data = [];

const ProductInfo = (data) => {
  mainBody.innerHTML = `<div><h3>${data.title}</h3></div>
<div><p>${data.price}</p></div>`;
};

const displayData = (data) => {
  data
    .map((products) => {
      const productDiv = document.createElement("div");
      cardSection.appendChild(productDiv);
      productDiv.addEventListener("click", () => {
        console.log(data);
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
    const res = await fetch("/music/products.json");
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
