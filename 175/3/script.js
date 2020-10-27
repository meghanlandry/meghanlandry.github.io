//Some of code from here: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the user scrolls the page, execute myFunction
window.onload = runScript;

function runScript(){
  window.onscroll = function() {
    stickyNav()
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  // Used understanding of above example to make a expand button
  var text5 = document.getElementById("text5");
  var text2 = document.getElementById("text2");
  var text12 = document.getElementById("text12");
  var text6 = document.getElementById("text6");
  var text3 = document.getElementById("text3");
  var text4 = document.getElementById("text4");
  var gallery = document.getElementById("gallery");
  var more = document.getElementById("more"); document.getElementById("more").addEventListener("click", expand);

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function expand() {
    gallery.classList.add("artexpand");
    gallery.classList.remove("art");
    more.classList.add("hide");
    text5.classList.remove("hide");
    text2.classList.remove("hide");
    text12.classList.remove("hide");
    text6.classList.remove("hide");
    text3.classList.remove("hide");
    text4.classList.remove("hide");
  }
}
