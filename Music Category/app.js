const mainBody = document.querySelector(".main");
const guitars = document.querySelector(".guitars");
const cardSection = document.querySelector(".card-section");
filteredArray = [];

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

const guitarsFilter = (filteredArray, dummyData) => {
  for (let product of dummyData) {
    if (product.category === 1) {
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

guitars.addEventListener("click", () => {
  cardSection.innerHTML = "";
  displayCategoryData(filteredArray);
  guitars.classList.add("clickedButton");
});

// Fetching data from local JSON file
const fetchLocalData = async () => {
  try {
    const res = await fetch("/products.json");
    const data = await res.json();
    guitarsFilter(filteredArray, data);
    displayData(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
console.log(fetchLocalData());
