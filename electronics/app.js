const mainBody = document.querySelector(".main");
const camera = document.querySelector(".camera");
const cardSection = document.querySelector(".card-section");
const console = document.querySelector(".console");
const device = document.querySelector(".device");
const mouse_keyboard = document.querySelector(".mouse_keyboard");
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
