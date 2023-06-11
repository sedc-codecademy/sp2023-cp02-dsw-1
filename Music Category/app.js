const mainBody = document.querySelector(".main");
const guitars = document.querySelector(".guitars");
const cardSection = document.querySelector(".card-section");
const bassGuitars = document.querySelector(".bass-guitars");
const keys = document.querySelector(".keys");
const drums = document.querySelector(".drums");
const microphones = document.querySelector(".microphones");

const displayData = (dummyData) => {
  return (cardSection.innerHTML = dummyData
    .map((data) => {
      return `
		<div class="product-card">
    <div class="product-card-header">
        <img src="${data.image}"></img>
      </div>
      <div class="product-card-details">
				<p>${data.title}</h>
				<h3>${data.price} $</h3>
		</div>
		  </div>
		`;
    })
    .join(""));
};

const categoryFilter = (filteredArray, dummyData, category) => {
  for (let product of dummyData) {
    if (product.category === category) {
      filteredArray.push(product);
    }
  }
};
const displayCategoryData = (dummyData) => {
  return (cardSection.innerHTML = dummyData
    .map((data) => {
      return `
		<div class="product-card">
    <div class="product-card-header">
        <img src="${data.image}"></img>
      </div>
      <div class="product-card-details">
				<p>${data.title}</h>
				<h3>${data.price} $</h3>
		</div>
		  </div>
		`;
    })
    .join(""));
};

const guitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, 1);
  guitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayCategoryData(filteredArray);
    guitars.classList.add("clickedButton");
  });
};

const bassGuitarButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, 2);
  bassGuitars.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayCategoryData(filteredArray);
    bassGuitars.classList.add("clickedButton");
  });
};

const keysButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, 3);
  keys.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayCategoryData(filteredArray);
    keys.classList.add("clickedButton");
  });
};

const drumsButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, 4);
  drums.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayCategoryData(filteredArray);
    drums.classList.add("clickedButton");
  });
};

const microphonesButton = (productsData) => {
  const filteredArray = [];
  categoryFilter(filteredArray, productsData, 5);
  microphones.addEventListener("click", () => {
    cardSection.innerHTML = "";
    displayCategoryData(filteredArray);
    microphones.classList.add("clickedButton");
  });
};

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/products.json");
    const data = await res.json();
    microphonesButton(data);
    drumsButton(data);
    keysButton(data);
    bassGuitarButton(data);
    guitarButton(data);
    displayData(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

categoryFilter(filteredArray, data);
