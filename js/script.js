lightbox.option({
    resizeDuration: 200,
    wrapAround: true, // Enables Prev/Next looping
    alwaysShowNavOnTouchDevices: true,
  });



  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
  

document.addEventListener("DOMContentLoaded", function() {
  var mixer = mixitup('#gallery', {
      selectors: {
          target: '.gallery-item'
      },
      animation: {
          duration: 300
      }
  });
});



const words = ["Developer", "Designer", "Freelancer", "Coder"];
const typingText = document.getElementById("typing-text");

// Customizable speeds (in milliseconds)
const typingSpeed = 150; // Speed of typing each letter
const deletingSpeed = 100; // Speed of deleting each letter
const pauseDuration = 500; // Pause before deleting a word

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, pauseDuration);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing effect
typeEffect();



$('.sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: true,
    prevArrow: '<i class="fa-solid fa-circle-arrow-left leftArrow"></i>',
    nextArrow: '<i class="fa-solid fa-circle-arrow-right rightArrow"></i>',
  });


  //==== Back-to-top button
let backToTop = $(".back-to-top");
backToTop.hide();
$(window).on("scroll", function (event) {
if ($(this).scrollTop() > 600) {
  $(".back-to-top").fadeIn(200);
} else {
  $(".back-to-top").fadeOut(200);
}
});
//==== Animate the scroll to top
$(".back-to-top").on("click", function (event) {
event.preventDefault();

$("html, body").animate(
  {
    scrollTop: 0,
  },
  1000
);
});



