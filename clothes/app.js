const mainBody = document.querySelector(".options");
const cardSection = document.querySelector(".card-section");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");
const kids = document.querySelector(".kids");
const allProducts = document.querySelector(".allProducts");
const cancelButton = document.querySelector(".cancel-button");
const quantityElement = document.querySelector(".quantity-number");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const totalPrice = document.querySelector(".total-price");
const produtCardDetails = document.querySelector(".product-card-details");
const productInfoContainer = document.querySelector(".container");
const productDetails = document.querySelector(".details");

const filteredArray = [];
const data = [];

const ProductInfo = (product) => {
  quantityElement.value = 1;
  mainBody.style.display = "none";
  productInfoContainer.style.display = "flex";
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

  productDetails.innerHTML = `
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quisquam voluptatem natus beatae explicabo, corporis suscipit quaerat dolor architecto. Consectetur, sapiente sed. Architecto, assumenda a unde voluptas cum ducimus molestiae.</p>
  `;

  minusButton.addEventListener("click", () => {
    if (quantityElement.value < 2) {
      minusButton.disabled = true;
    } else {
      quantityElement.value--;
    }
    totalPrice.innerHTML = (product.price * quantityElement.value).toFixed(2);
  });
  plusButton.addEventListener("click", () => {
    quantityElement.value++;
    totalPrice.innerHTML = (product.price * quantityElement.value).toFixed(2);
    minusButton.disabled = false;
    console.log(quantityElement.value);
  });
};

const displayData = (data) => {
  data
    .map((products) => {
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
 		`);
    })
    .join("");
};

const categoryFilter = (filteredArray, dummyData, category) => {
  for (let product of dummyData) {
    if (product.category === category) {
      filteredArray.push(product);
    }
  }
};

const manButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "man");
  man.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    man.classList.toggle("clickedButton");
  });
};

const womanButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "woman");
  woman.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    woman.classList.add("clickedButton");
  });
};

const kidsButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, "kids");
  kids.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(filteredArray);
    kids.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/clothes/products.json");
    const data = await res.json();

    manButton(data);
    womanButton(data);
    kidsButton(data);
    displayData(data);
    allProductsButton(data);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);

//let alldata = [];
const printAllProducts = (alldata, dummyData) => {
  for (let product of dummyData) {
    alldata.push(product);
  }
};

const allProductsButton = (productsData) => {
  let alldata = [];
  printAllProducts(alldata, productsData);
  allProducts.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayData(alldata);
    allProducts.classList.toggle("clickedButton");
  });
};
