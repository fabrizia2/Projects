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





  