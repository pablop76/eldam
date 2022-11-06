const widgetFb = document.querySelector(".widget-fb");
const backToTop = document.querySelector(".back-to-top");

widgetFb.addEventListener("click", function () {
  if (widgetFb) {
    this.classList.toggle("widget-fb_show");
  }
});

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 200) {
    backToTop.style.right = 0;
  } else {
    backToTop.style.right = "-200px";
  }
});
