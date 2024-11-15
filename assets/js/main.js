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





const player = document.getElementById('snowboarding-player');
const sections = document.querySelectorAll('.content-section');

window.addEventListener('scroll', () => {
  let sectionIndex = 0;

  // Loop through each section to determine the current section in view
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      sectionIndex = index;
    }
  });

  // Alternate position and flip based on section index (right for even, left for odd)
  const isRightSide = sectionIndex % 2 === 0;
  const position = isRightSide ? '0vw' : '-50vw';
  
  // Set the position and flip the player image when on the right side
  player.style.transform = `translateX(${position}) ${isRightSide ? 'scaleX(1)' : 'scaleX(-1)'}`;
});

// Optional: Disable Bootstrap's toggle functionality on hover-only dropdowns
document.querySelector('#expertiseDropdown').addEventListener('click', function (e) {
  if (window.innerWidth >= 992) { // Desktop-only
      window.location.href = '/expertise';
  }
});