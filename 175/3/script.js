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
    more.classList.add("hidebutton");
  }
}
