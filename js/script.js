var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides (slideIndex += n);
}

function currentSlide(n) {
  showSlides (slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName ("mySlides");
  var dots = document.getElementsByClassName ("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
        slides[i] .style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots [i] .className.replace(" active", "");
  }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

//read more button
function myFunction() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
  var moreText = document.getElementById("more");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    document.getElementById("middle").style.height = "570px";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    document.getElementById("middle").style.height = "770px";
  }
}


// back to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
