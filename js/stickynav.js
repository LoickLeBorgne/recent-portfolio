window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navigation');
  var scrolled = window.scrollY;

  if (scrolled > 0) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-white');
  } else {
    navbar.classList.remove('bg-white');
    navbar.classList.add('bg-transparent');
  }
});











