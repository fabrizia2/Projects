window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// Initialize variables
let currentSlide = 0;
const allSlides = document.querySelectorAll('.slider .slide');

// Show next slide function
function showNextSlide() {
    allSlides.forEach(slide => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    currentSlide = (currentSlide + 1) % (allSlides.length / 4); // Adjust for multiple sections
}

// Automatically move to the next slide every 3 seconds
setInterval(showNextSlide, 3000);

