const mainBody = document.querySelector(".options");
const cardSection = document.querySelector(".card-section");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");
const kids = document.querySelector(".kids");
const allProducts = document.querySelector(".allProducts");

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
  for (let product of dummyData) 
    {
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


