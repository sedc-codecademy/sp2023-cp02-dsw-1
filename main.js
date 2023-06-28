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
  <li class="dropdown-li-phone"><a href="#">Clothes</a></li>
  <li class="dropdown-li-phone"><a href="#">Shoes</a></li>
  <li class="dropdown-li-phone"><a href="#">Jewlery</a></li>
  <li class="dropdown-li-phone"><a href="#">Electronics</a></li>
  <li class="dropdown-li-phone"><a href="#">Music</a></li>
  <li class="dropdown-li-phone"><a href="#">Furniture</a></li>`;
};

const showSearch = () => {
  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  } else {
    searchDisplay.style.display = "block";
  }
};
