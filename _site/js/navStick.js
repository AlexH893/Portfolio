/*
* Navbar scroll stick
* This lets the navbar stick the top of the page
* and sits just under the header image when scrolled
* to the top
*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")

  } else {
    navbar.classList.remove("sticky");
  }
}   