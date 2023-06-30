(function () {
  let carousel = document.querySelector(".carousel");
  let carouselInner = carousel.querySelector(".carousel-inner");
  let carouselItems = carousel.querySelectorAll(".carousel-item");
  let currentItem = 0;
  let totalItems = carouselItems.length;
  let slideWidth = carousel.clientWidth;

  carouselInner.style.transform = "translateX(0)";

  function scrollToPreviousSlide() {
    if (currentItem === 0) {
      currentItem = totalItems - 1;
    } else {
      currentItem--;
    }
    carouselInner.style.transform = `translateX(-${
      slideWidth * currentItem
    }px)`;
  }

  function scrollToNextSlide() {
    if (currentItem === totalItems - 1) {
      currentItem = 0;
    } else {
      currentItem++;
    }
    carouselInner.style.transform = `translateX(-${
      slideWidth * currentItem
    }px)`;
  }

  let previousButton = document.getElementById("scroll-left");
  previousButton.addEventListener("click", scrollToPreviousSlide);

  let nextButton = document.getElementById("scroll-right");
  nextButton.addEventListener("click", scrollToNextSlide);
})();

(function () {
  let slideshow = document.querySelector(".slideshow");
  let images = [
    "./images/electronics-sale-slideshow.jpg",
    "./images/summer-sale-slideshow.jpg",
    "./images/furniture-sale-slideshow.jpg",
  ];
  let currentImage = 0;

  function changeBackground() {
    slideshow.style.backgroundImage = `url(${images[currentImage]})`;
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeBackground, 4000);
})();

const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".categories-and-deals-list-phone");
const categoriesButton = document.querySelector(".categories-phone-link");
const showSearchButton = document.querySelector(".search-button-phone");
const searchDisplay = document.querySelector(".search-display-phone");

const menuDisplay = () => {
  searchDisplay.style.display = "none";

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  menu.innerHTML = `
  <li class="phone-menu-item">
 <div class="categories-menu-phone">
   <ul class="categories-ul-phone">
     <li>
       <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
     </li>
   </ul>
 </div>
</li>
<li class="phone-menu-item middle-item"><a href="#">Deals</a></li>
<li class="phone-menu-item"><a href="#">Contact</a></li>
</ul>`;
};

const collapseMenu = () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  }
  menu.innerHTML = `
   <li class="phone-menu-item">
  <div class="categories-menu-phone">
    <ul class="categories-ul-phone">
      <li>
        <div class="categories-phone-link" onclick='showCategories()'>Categories</div>
      </li>
    </ul>
  </div>
</li>
<li class="phone-menu-item middle-item"><a href="#">Deals</a></li>
<li class="phone-menu-item"><a href="#">Contact</a></li>
</ul>`;
};

const showCategories = () => {
  menu.innerHTML = `  
  <li class="dropdown-li-phone border-dropdown"><a href="#">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Jewlery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Music</a></li>
  <li class="dropdown-li-phone"><a href="#">Furniture</a></li>`;
};

const showSearch = () => {
  menu.style.display = "none";

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  } else {
    searchDisplay.style.display = "block";
  }
};

const showMoreBtn = document.querySelector(".show-more-btn");
const todaysDealsDiv = document.querySelector(".todays-deals-list");

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.style.display = "none";

  todaysDealsDiv.innerHTML += ` <div class="todays-list-item item1">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item2">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item3">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item4">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item5">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item6">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item7">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item8">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item9">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>

<div class="todays-list-item item10">
  <img src="images/sedc-logo.webp" alt="">
  <div class="prices-and-btn">
    <div class="deal-text">
      <div class="deal">20% off</div>
      <span class="new-price">24.00$</span>
      <span class="old-price"><s>30.00$</s></span>
    </div>
    <div class="buy-btn">
      <button>Buy Now</button>
    </div>
  </div>
</div>`;
});
