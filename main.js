const elementToggleFunc = function(elem) {
    elem.classList.toggle("active")
}

//
const hamburgerBtn = document.querySelector(".blog-hamburger");
const navList = document.querySelector(".hamburger-folder-list");

//
const page = document.querySelector(".head-boy");

//
hamburgerBtn.addEventListener("click", function() {
    elementToggleFunc(navList)
    elementToggleFunc(hamburgerBtn)

})



