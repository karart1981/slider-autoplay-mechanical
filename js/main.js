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

/* write autoplay or mechanical in button*/
function toggleText(event){
	let text = event.textContent || event.innerText;
	if(text == "Autoplay"){
	  event.innerHTML = "Mechanical";

	} else{
	  event.innerHTML = "Autoplay";
	  
	}
  }
  /* end */

  /* title of images*/
   function titleImage(){
	let nameTitle = document.querySelector("#nameTitle");
	let text = document.querySelector("#text");

	text.innerHTML = `${nameTitle.value}`;
    }
/* end */

/* type of slider*/
function sliderType(event){
	let text = event.textContent || event.innerText;
	if(text == "Carousel"){
	  event.innerHTML = "Fade-in/Fade-out";

	} else{
	  event.innerHTML = "Carousel";
	  
	}
  }
  /* end */
