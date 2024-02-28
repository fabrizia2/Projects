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

document.addEventListener('DOMContentLoaded', function() {
  // Function to initialize the sliders
  function initSliders() {
      const sliders = document.querySelectorAll('.slider');
      sliders.forEach((slider, index) => {
          initSlider(slider, index);
      });
  }

  // Function to initialize a single slider
  function initSlider(slider, index) {
      const slides = slider.querySelectorAll('.slide-group');
      const dotsContainer = slider.nextElementSibling;

      // Create a dot for each slide
      slides.forEach((slide, i) => {
          const dot = document.createElement('span');
          dot.classList.add('dot');
          dot.setAttribute('data-index', i);
          dotsContainer.appendChild(dot);
      });

      // Add event listener to each dot
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach(dot => {
          dot.addEventListener('click', function() {
              const index = parseInt(this.getAttribute('data-index'));
              showSlide(slider, index);
          });
      });

      // Show initial slide
      showSlide(slider, 0);
  }

  // Function to show the current slide and update the active dot
  function showSlide(slider, index) {
      const slides = slider.querySelectorAll('.slide-group');
      const dots = slider.nextElementSibling.querySelectorAll('.dot');

      // Hide all slides and remove active class from dots
      slides.forEach(slide => {
          slide.style.display = 'none';
      });
      dots.forEach(dot => {
          dot.classList.remove('active');
      });

      // Show the current slide and update the active dot
      slides[index].style.display = 'flex'; // Adjust display property based on your CSS
      dots[index].classList.add('active');
  }

  // Initialize all sliders on page load
  window.addEventListener('load', () => {
      initSliders();
  });
});





/*// Initialize variables
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


 // Function to initialize the slider
// Function to show the current slide and update the active dot
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel .slide');

  // Hide all slides
  slides.forEach(slide => {
      slide.style.display = 'none';
  });

  // Show the current slide and the next two slides
  for (let i = index; i < index + 3; i++) {
      if (slides[i]) {
          slides[i].style.display = 'block';
      }
  }
}


// Function to initialize the slider
function initSlider() {
  const slideGroups = document.querySelectorAll('.carousel .slide-group');
  const dotsContainer = document.querySelector('.dots');

  // Calculate the total number of dots needed
  const totalGroups = slideGroups.length;
  const totalDots = totalGroups;

  // Create dots based on the total number
  for (let i = 0; i < totalDots; i++) {
      const dots = document.createElement('span');
      dots.classList.add('dot');
      dots.setAttribute('data-index', i);
      dotsContainer.appendChild(dots);
  }

  // Add event listener to each dot
  document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          showSlide(index * 3); // Show the first image of the selected page
      });
  });

  // Show initial slide
  showSlide(0);

  // Automatically move to the next slide every 3 seconds
  setInterval(() => {
      const currentIndex = getCurrentSlideIndex();
      const nextIndex = (currentIndex + 1) % totalDots;
      showSlide(nextIndex * 3); // Show the first image of the next page
  }, 3000);
}

// Initialize the slider
initSlider();

*/

