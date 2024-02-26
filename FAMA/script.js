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