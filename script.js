"use strict";

const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");


let activeSlide = 0;

changeBg();

function changeBg() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function addActive() {
  slides[activeSlide].classList.add("active");
  changeBg();
}

function removeActive() {
  slides[activeSlide].classList.remove("active");
}

leftBtn.addEventListener("click", () => {

  removeActive();
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  addActive();
});

rightBtn.addEventListener("click", () => {

  removeActive();
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  addActive();
});