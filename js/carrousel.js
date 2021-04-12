const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

let sectionIndex = 0;
//let section = document.querySelector('.section'); quitar magic number 3

// function set remove + style transform doesn't work
// document.querySelector(".controls .selected").classList.remove("selected");
// slider.style.transform = "translate(" + sectionIndex * -25 + "%)";


document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector('.controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
