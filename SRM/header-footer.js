// Fetch and insert the header
fetch('header.html')
.then(response => response.text())
.then(html => document.getElementById('header-placeholder').innerHTML = html);

// Fetch and insert the footer
fetch('footer.html')
.then(response => response.text())
.then(html => document.getElementById('footer-placeholder').innerHTML = html);

//supporters script
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Function to automatically scroll to the next slide
function autoScroll() {
    next.click(); // Trigger click event on the next button
}

// Set interval for automatic scrolling (change 5000 to desired interval in milliseconds)
let intervalId = setInterval(autoScroll, 5000);

// Stop automatic scrolling when mouse enters the slider area
document.querySelector('.slide').addEventListener('mouseenter', function() {
    clearInterval(intervalId); // Clear interval to stop automatic scrolling
});

// Resume automatic scrolling when mouse leaves the slider area
document.querySelector('.slide').addEventListener('mouseleave', function() {
    intervalId = setInterval(autoScroll, 5000); // Set interval again to resume automatic scrolling
});


//form
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Simulate form submission (replace this with actual form submission code)
        console.log('Form data:', formData);

        // Display confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
    });
});