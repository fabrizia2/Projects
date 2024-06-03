class ParallaxCard {
    constructor(cardEl) {
      this.cardEl = cardEl
      this.imageWrapper = cardEl.querySelector('.card__image-wrapper')
  
      this.heightDiff = this.imageWrapper.clientHeight - this.cardEl.clientHeight
    }
  
    update() {
      const boundingRect = this.cardEl.getBoundingClientRect()
      const topOffset = boundingRect.y
      const progress = topOffset / window.innerHeight
      const offset = this.heightDiff * progress * -1
      this.imageWrapper.style.transform = `translate(0, ${offset}px)`
    }
  }
  
  function initCardParallax() {
    const cardEls = document.querySelectorAll('.card')
    const cards = Array.from(cardEls).map((cardEl) => new ParallaxCard(cardEl))
  
    function update() {
      cards.forEach((card) => card.update())
    }
    
    function onScroll() {
      requestAnimationFrame(update)
    }
  
    window.addEventListener('scroll', onScroll)
    requestAnimationFrame(update)
  }
  
  initCardParallax()

  //runway
  var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
    //var i;
  //  var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
   //     slides[i].style.display = "none";
   // }
  //  slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
   // slides[slideIndex - 1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image every 2 seconds
//}