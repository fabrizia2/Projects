//header script
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header content
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            // Insert the header HTML into the header-container element
            document.getElementById("header-container").innerHTML = html;
        })
        .catch(error => console.error("Error fetching header:", error));
});

 // Hambuger menu
 function toggleNav() {
    var nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Music script
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-icon');

    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log('Play button clicked');
            const musicItem = this.closest('.music-item'); // Find the nearest ancestor with class "music-item"
            console.log('Music item:', musicItem);
            const audioPlayer = musicItem.querySelector('audio'); // Find the audio element within the music item
            console.log('Audio player:', audioPlayer);
            const audioSource = this.getAttribute('data-src'); // Retrieve data-src from the clicked button
            console.log('Audio source:', audioSource);
            audioPlayer.src = audioSource;
            audioPlayer.play();
        });
    });
});

//footer script
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header content
    fetch("footer.html")
        .then(response => response.text())
        .then(html => {
            // Insert the header HTML into the header-container element
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(error => console.error("Error fetching header:", error));
});

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





  