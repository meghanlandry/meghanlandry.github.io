// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");
console.log("done1")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log("done2")

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    console.log("done3")
  } else {
    navbar.classList.remove("sticky");
  }
}
