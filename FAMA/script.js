// script.js
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`; // Adjust percentage for width of each slide
    });
}

// Automatically move to the next slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// script.js
function sendMessage() {
    var message = document.getElementById('chat-input').value;
    var chatBox = document.getElementById('chat-box');
    var newMessage = document.createElement('p');
    newMessage.textContent = 'You: ' + message;
    chatBox.appendChild(newMessage);
    document.getElementById('chat-input').value = '';
}


/*
// Selecting all slides
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

// Function to show slides
function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Initial call to show the first slide
showSlide(currentSlide);

// Function to navigate to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// script.js
function toggleNav() {
    var modal = document.getElementById('navModal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}
*/