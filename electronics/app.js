const mainBody = document.querySelector(".main");
const camera = document.querySelector(".camera");
const cardSection = document.querySelector(".card-section");
const console = document.querySelector(".console");
const device = document.querySelector(".device");
const mouse_keyboard = document.querySelector(".mouse_keyboard");
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
      if (products.subCategory == "electronic") {
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

const cameraButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "camera");
  camera.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
  });
};

const consoleButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "console");
  console.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
  });
};

const deviceButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "mobile");
  device.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
  });
};

const mouse_keyboardButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "keyboard");
  mouse_keyboard.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
  });
};

const fetchLocalData = async () => {
  try {
    const res = await fetch("../db/products.json");
    const data = await res.json();
    displayData(data);
    cameraButton(data);
    consoleButton(data);
    deviceButton(data);
    mouse_keyboardButton(data);
    allProductsButton(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);
