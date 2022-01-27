$(window).ready(function() {
    document.querySelector("body").classList.remove("preload");
});





// This is to Open the Modal One
var modalOneBtn = document.querySelector(".modal-one-btn");

modalOneBtn.addEventListener("click", function() {
    document.querySelector(".modal-container-one").classList.add("show-modal");
    document.querySelector(".modal-container-one").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content One

var modalContainer = document.querySelector(".modal-container-one");

modalContainer.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-one")) return
    modalContainer.classList.remove("show-modal");
    modalContainer.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal One
$(".modal-exit-btn-one").click(function() {
    modalContainer.classList.remove("show-modal");
    modalContainer.classList.add("hide-modal");
});










// This is to open the Modal Two
var modalTwoBtn = document.querySelector(".modal-two-btn");

modalTwoBtn.addEventListener("click", function() {
    document.querySelector(".modal-container-two").classList.add("show-modal");
    document.querySelector(".modal-container-two").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content One

var modalContainer2 = document.querySelector(".modal-container-two");

modalContainer2.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-two")) return
    modalContainer2.classList.remove("show-modal");
    modalContainer2.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal One
$(".modal-exit-btn-two").click(function() {
    modalContainer2.classList.remove("show-modal");
    modalContainer2.classList.add("hide-modal");
});













// This is to open the Modal Three
var modalThreeBtn = document.querySelector(".modal-three-btn");

modalThreeBtn.addEventListener("click", function() {
    document.querySelector(".modal-container-three").classList.add("show-modal");
    document.querySelector(".modal-container-three").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content One

var modalContainer3 = document.querySelector(".modal-container-three");

modalContainer3.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-three")) return
    modalContainer3.classList.remove("show-modal");
    modalContainer3.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal One
$(".modal-exit-btn-three").click(function() {
    modalContainer3.classList.remove("show-modal");
    modalContainer3.classList.add("hide-modal");
});







// This is to open the Modal Four
var modalFourBtn = document.querySelector(".modal-four-btn");

modalFourBtn.addEventListener("click", function() {
    document.querySelector(".modal-container-four").classList.add("show-modal");
    document.querySelector(".modal-container-four").classList.remove("hide-modal");
});

// This is for the Click outside the Modal Content One

var modalContainer4 = document.querySelector(".modal-container-four");

modalContainer4.addEventListener("click", function(event) {
    if (event.target.closest(".modal-content-four")) return
    modalContainer4.classList.remove("show-modal");
    modalContainer4.classList.add("hide-modal");
});

// This is for the Exit Btn in the Modal One
$(".modal-exit-btn-four").click(function() {
    modalContainer4.classList.remove("show-modal");
    modalContainer4.classList.add("hide-modal");
});