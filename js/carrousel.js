const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".controls ul");

let sectionIndex = 0;
// let sections = document.querySelector('.section');

function removeSelected(){
  document.querySelector(".controls .selected").classList.remove("selected");
}

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;
    removeSelected();
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    // añadir animación
  });
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  removeSelected();
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  // añadir animación
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  removeSelected();
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
  // añadir animación
});
