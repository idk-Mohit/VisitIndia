var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// *************************section 2 slideshow****************************************
var slideIndex1 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

{
  var slideIndex2 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
}

{
  var slideIndex3 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {slideIndex3 = 1}
  x[slideIndex3-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
}


{
  var slideIndex4 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {slideIndex4 = 1}
  x[slideIndex4-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
}

{
  var slideIndex5 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {slideIndex5 = 1}
  x[slideIndex5-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
}

{var slideIndex6 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex6++;
  if (slideIndex6 > x.length) {slideIndex6 = 1}
  x[slideIndex6-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
}

