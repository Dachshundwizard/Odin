// ============= SCROLLING ANIMATIONS =================

window.addEventListener('DOMContentLoaded', e => {
	document.querySelector('.one').style.animationName = 'fade-in-a';
})

window.addEventListener('scroll', e => {

	// hecks whether the element is within the limits of the viewport or not
	let fade = (element, animationName) => {
		if (element.getBoundingClientRect()['top'] < innerHeight) 
			element.style.animationName = animationName;
	}; 
	
	Array.from(document.querySelectorAll('.block:not(.one):not(.two)')).forEach(block => fade(block, 'fade-in-a'));
});


function scrollDetect(){
	var lastScroll = 0;
  
	window.onscroll = function() {
		let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  
		if (currentScroll > 0 && lastScroll <= currentScroll){
		  lastScroll = currentScroll;
		  console.log("Scrolling DOWN");
		  document.querySelector('header').style.top = "-70px";
		}else{
		  lastScroll = currentScroll;
		  console.log("Scrolling UP");
		  document.querySelector('header').style.top = "0px";
		}
	};
  } 
  scrollDetect();