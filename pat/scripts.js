let slideIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.image-container img');
    if (index >= images.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = images.length - 1; }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndex].style.display = "block";
}

function nextImage() {
    slideIndex++;
    showImage(slideIndex);
}

function prevImage() {
    slideIndex--;
    showImage(slideIndex);
}

showImage(slideIndex);
