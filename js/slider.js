
var slider = document.querySelector(".slider");

var slide1 = document.querySelector("#slide-1");
var slide2 = document.querySelector("#slide-2");
var slide3 = document.querySelector("#slide-3");

slide1.addEventListener("click", function(){
	slide1.checked = true;
	slider.style.backgroundImage = "url('img/slide1.png')";
	document.body.style.backgroundImage = "url('img/slide-light11.png')";
	document.body.style.backgroundColor = '#8da798';
});

slide2.addEventListener("click", function(){
	slide2.checked = true;
	slider.style.backgroundImage = "url('img/slide2.png')";
	document.body.style.backgroundImage = "url('img/slide-light22.png')";
	document.body.style.backgroundColor = '#8996a6';
});

slide3.addEventListener("click", function(){
	slide3.checked = true;
	slider.style.backgroundImage = "url('img/slide3.png')";
	document.body.style.backgroundImage = "url('img/slide-light33.png')";
	document.body.style.backgroundColor = '#9e8c85';
});