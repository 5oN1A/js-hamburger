const hamburger = document.querySelector(".hamburger-menu");
const openBtn = document.querySelector(".fa-bars");

console.log(hamburger);

openBtn.addEventListener("click", function () {

    hamburger.classList.add("active");

})

const closeBtn = document.querySelector(".fa-times");

console.log(closeBtn);

closeBtn.addEventListener("click", function () {

    hamburger.classList.remove("active");

})

