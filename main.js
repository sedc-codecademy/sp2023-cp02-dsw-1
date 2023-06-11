(function () {
  var carousel = document.querySelector(".carousel");
  var carouselInner = carousel.querySelector(".carousel-inner");
  var carouselItems = carousel.querySelectorAll(".carousel-item");
  var currentItem = 0;
  var totalItems = carouselItems.length;
  var slideWidth = carousel.clientWidth;

  // Set initial position of the carousel
  carouselInner.style.transform = "translateX(0)";

  // Function to scroll to the previous slide
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

  // Function to scroll to the next slide
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

  // Attach click event to the previous slide button
  var previousButton = document.getElementById("scroll-left");
  previousButton.addEventListener("click", scrollToPreviousSlide);

  // Attach click event to the next slide button
  var nextButton = document.getElementById("scroll-right");
  nextButton.addEventListener("click", scrollToNextSlide);
})();
