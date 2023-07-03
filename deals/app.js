const cardSection = document.querySelector(".card-section");

const displayData = (data) => {
  data
    .map((products) => {
      if (products.subCategory == "deals") {
        const productDiv = document.createElement("div");
        cardSection.appendChild(productDiv);
        productDiv.addEventListener("click", () => {
          ProductInfo(products);
        });
        return (productDiv.innerHTML = `
 		<div class="product-card">
     <div class="product-card-header">
         <span class ="product-deal">-27%</span>
         <img src="${products.image}"></img>
       </div>
     <div class="product-card-details">
 		<p>${products.title}</h>
 				<h3>${Math.round(products.price * 27) / 100} $</h3>
 		</div>
 		  </div>
 		`);
      }
    })
    .join("");
};

const fetchLocalData = async () => {};
try {
  const res = await fetch("../db/products.json");
  const data = await res.json();
  displayData(data);
} catch (error) {
  throw new Error(error);
}
fetchLocalData();
