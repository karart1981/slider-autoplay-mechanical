/* mechanical slider*/ 
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
	slideIndex = 1;
  }
  if (n < 1) {
	slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* end slider*/


/* title of images*/
function titleImage(){
	let nameTitle = document.querySelector("#nameTitle");
	let text = document.querySelector("#text");

	text.innerHTML = `${nameTitle.value}`;
}
/* end */


/* Fide-in/Fide-out */ 
const autoplay = document.querySelector("#autoplay");
autoplay.addEventListener("click", function(){
	let slideIndex = 0;
	showSlides();
	
   

	function showSlides(n) {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  slideIndex++;
	  if (slideIndex > slides.length) {slideIndex = 1;}
	  slides[slideIndex-1].style.display = "block";
	  setTimeout(showSlides, 4000); // Change image every 4 seconds
	}
});

/* Carousel*/ 
const carousel = document.querySelector("#carousel");
carousel.addEventListener("click", function(){
	let counter = 1;
	setInterval(function(){
	  document.getElementById('radio' + counter).checked = true;
	  counter++;
	  if(counter > 4){
		counter = 1;
	  }
	}, 4000);
	
});