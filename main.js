const hamburger = document.querySelector(".hamburger-menu");
const openBtn = document.querySelector(".fa-bars");

console.log(hamburger.classList);
console.log(hamburger.className);

openBtn.addEventListener("click", function () {

    hamburger.className += " active";

})

const closeBtn = document.querySelector(".fa-times");

console.log(closeBtn);

closeBtn.addEventListener("click", function () {

    hamburger.classList.toggle("active");

})


