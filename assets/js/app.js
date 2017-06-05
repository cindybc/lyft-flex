

var myNav = document.getElementById("menu");
var enlace1 = document.getElementById("enla1");
var enlace2 = document.getElementById("enla2");
var enlace3 = document.getElementById("enla3");
var enlace4 = document.getElementById("enla4");
window.onscroll= function () {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
		myNav.classList.add("cambioFondo");
		enlace1.classList.add("cambioColor");
		enlace2.classList.add("cambioColor");
		enlace3.classList.add("cambioColor");
		enlace4.classList.add("cambioColor");
	}
	else{
		myNav.classList.remove("cambioFondo");
		enlace1.classList.remove("cambioColor");
		enlace2.classList.remove("cambioColor");
		enlace3.classList.remove("cambioColor");
		enlace4.classList.remove("cambioColor");
	}
};