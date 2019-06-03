var mainNav = document.querySelector(".main-navigation");
var mainToggle = mainNav.querySelector(".main-navigation__toggle");

mainNav.classList.remove("main-navigation--nojs");

mainToggle.addEventListener("click", function() {
  if(mainNav.classList.contains("main-navigation--closed")) {
    mainNav.classList.remove("main-navigation--closed");
    mainNav.classList.add("main-navigation--opened");
  }
  else {
    mainNav.classList.remove("main-navigation--opened");
    mainNav.classList.add("main-navigation--closed");
  }
});
