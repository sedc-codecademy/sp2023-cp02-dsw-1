let slideIndex = 0;
const slideWidth = `100`;
const slides = document.getElementsByClassName("slide");
const carouselContent = document.querySelector(".carousel-content");
const scrollLeftBtn = document.querySelector(".prev-btn");
const scrollRightBtn = document.querySelector(".next-btn");
const showMoreBtn = document.querySelector(".show-more-btn");
const todaysDealsDiv = document.querySelector(".todays-deals-list");
const showLessBtn = document.querySelector(".show-less-btn");
const menuButton = document.querySelector(".menu");
const menu = document.querySelector(".categories-and-deals-list-phone");
const categoriesButton = document.querySelector(".categories-phone-link");
const showSearchButton = document.querySelector(".search-button-phone");
const searchDisplay = document.querySelector(".search-display-phone");
const reviewDiv = document.querySelector(".carousel-content");
const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-bar");
const searchBtnPhone = document.querySelector(".search-btn-phone");
const searchInputPhone = document.querySelector(".search-bar-phone");

searchInputPhone.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInput.value.toLowerCase();
    window.open(`./${url}/index.html`);
  }
});

searchBtnPhone.addEventListener("click", () => {
  const url = searchInputPhone.value;
  window.open(`./${url}/index.html`);
});

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const url = searchInput.value.toLowerCase();
    console.log(url);

    window.open(`./${url}/index.html`);
  }
});

searchBtn.addEventListener("click", () => {
  const url = searchInput.value;
  console.log(url);

  window.open(`./${url}/index.html`);
});

scrollLeftBtn.addEventListener("click", () => {
  slideIndex -= 100;

  if (slideIndex < 0) slideIndex = 0;

  carouselContent.style.transform = `translateX(-${slideIndex}%)`;
});

scrollRightBtn.addEventListener("click", () => {
  slideIndex += 100;

  const maxSlideIndex = (slides.length - 1) * 100;

  if (slideIndex > maxSlideIndex) {
    slideIndex = maxSlideIndex;
  }

  carouselContent.style.transform = `translateX(-${slideIndex}%)`;
});

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
<li class="phone-menu-item middle-item"><a href="./deals/index.html">Deals</a></li>
<li class="phone-menu-item"><a href="./contact/index.html">Contact</a></li>
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
<li class="phone-menu-item middle-item"><a href="./deals/index.html">Deals</a></li>
<li class="phone-menu-item"><a href="#">Contact</a></li>
</ul>`;
};

const showCategories = () => {
  menu.innerHTML = `  
  <svg class="back-arrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" ></path></svg>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Clothes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Shoes</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="./jewellery/index.html">Jewellery</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Electronics</a></li>
  <li class="dropdown-li-phone border-dropdown"><a href="#">Music</a></li>
  <li class="dropdown-li-phone"><a href="#">Furniture</a></li>`;

  const backArrow = document.querySelector(".back-arrow");

  backArrow.addEventListener("click", () => {
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
  <li class="phone-menu-item"><a href="./contact/index.html">Contact</a></li>
  </ul>`;
  });
};

const showSearch = () => {
  menu.style.display = "none";

  if (searchDisplay.style.display === "block") {
    searchDisplay.style.display = "none";
  } else {
    searchDisplay.style.display = "block";
  }
};

const fetchLocalData = async () => {
  try {
    const res = await fetch("./db/products.json");
    const data = await res.json();
    const dealsItems = data.filter((item) => item.subCategory === "deals");
    displayDeals(dealsItems);
    showMoreBtn.addEventListener("click", () => {
      showMoreBtn.style.display = "none";
      showLessBtn.style.display = "block";

      const lastSix = dealsItems.slice(6);

      lastSix.forEach((item) => {
        todaysDealsDiv.innerHTML += `
          <div class="todays-list-item">
          <img src="${item.image}" alt="">
          <div class="prices-and-btn">
            <div class="deal-text">
              <div class="deal">27% off</div>
              <span class="new-price">${
                Math.round(item.price * 27) / 100
              }</span>
          <span class="old-price"><s>${item.price}$</s></span>
            </div>
            <div class="buy-btn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      `;
      });
    });

    showLessBtn.addEventListener("click", () => {
      showMoreBtn.style.display = "block";
      showLessBtn.style.display = "none";

      const firstSix = dealsItems.slice(0, 6);
      todaysDealsDiv.innerHTML = ` `;
      firstSix.forEach((item) => {
        todaysDealsDiv.innerHTML += `
      <div class="todays-list-item">
      <img src="${item.image}" alt="">
      <div class="prices-and-btn">
        <div class="deal-text">
          <div class="deal">27% off</div>
          <span class="new-price">${Math.round(item.price * 27) / 100}</span>
          <span class="old-price"><s>${item.price}$</s></span>
        </div>
        <div class="buy-btn">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  `;
      });
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchLocalData();

const displayDeals = (data) => {
  const firstSix = data.slice(0, 6);

  firstSix.forEach((item) => {
    todaysDealsDiv.innerHTML += `
      <div class="todays-list-item">
      <img src="${item.image}" alt="">
      <div class="prices-and-btn">
        <div class="deal-text">
          <div class="deal">27% off</div>
          <span class="new-price">${((item.price * 27) / 100).toFixed(
            2
          )} $</span>
          <span class="old-price"><s>${item.price} $</s></span>
        </div>
        <div class="buy-btn">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  `;
  });
};

const fetchReviews = async () => {
  try {
    const res = await fetch("./db/products.json");
    const data = await res.json();
    const reviews = data.filter((item) => item.category === "reviews");
    function myFunction(x) {
      if (x.matches) {
        slideIndex = 0;
        carouselContent.style.transform = `translateX(0%)`;

        let reviewDivContent = "";

        reviews.forEach((review, index) => {
          if (index % 2 === 0) {
            if (index !== 0) {
              reviewDivContent += "</div>";
            }
            reviewDivContent += '<div class="slide">';
          }

          reviewDivContent += `
            <div class="cloud">
              <div class="profile">
                <img src="${review.image}" alt="" class="profile-photo" />
                <span class="name">${review.name}</span>
              </div>
              <div class="rating">
                <div class="comment">
                  "${review.review}"
                </div>
              </div>
              <div class="stars">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
          `;
        });

        reviewDivContent += "</div>";

        reviewDiv.innerHTML = reviewDivContent;
      } else {
        slideIndex = 0;
        carouselContent.style.transform = `translateX(0%)`;
        let reviewDivContent = "";

        let nineReviews = reviews.slice(0, 9);

        nineReviews.forEach((review, index) => {
          if (index % 3 === 0) {
            if (index !== 0) {
              reviewDivContent += "</div>";
            }
            reviewDivContent += '<div class="slide">';
          }

          reviewDivContent += `
            <div class="cloud">
              <div class="profile">
                <img src="${review.image}" alt="" class="profile-photo" />
                <span class="name">${review.name}</span>
              </div>
              <div class="rating">
                <div class="comment">
                  "${review.review}"
                </div>
              </div>
              <div class="stars">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
          `;
        });

        reviewDivContent += "</div>";

        reviewDiv.innerHTML = reviewDivContent;
      }
    }

    var x = window.matchMedia("(max-width: 700px)");
    myFunction(x);
    x.addListener(myFunction);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
fetchReviews();

const showReviews = (data) => {};
