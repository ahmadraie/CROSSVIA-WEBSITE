// Initialize AOS (Animate on Scroll)
AOS.init();

// Handle mobile sidebar toggle
const sidebar = document.querySelector('.sidebar');
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// preloader
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
});






// Optional: Disable Bootstrap's toggle functionality on hover-only dropdowns
document.querySelector('#expertiseDropdown').addEventListener('click', function (e) {
  if (window.innerWidth >= 992) { // Desktop-only
      window.location.href = '/expertise';
  }
});