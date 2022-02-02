$(window).on("load",inicio);

function inicio() {
	$(document).on("click","#addDefinicion",addDefin);
	$(document).on("click","#deletDefinicion",delDefin);
	$(document).on("click","#addLocalidad",addLocal);
	$(document).on("click","#addCoche",addCoche);
	$(document).on("click","#delCoche",delCoche);
	$(document).on("change","#comunidades",mostrarComunidad);
	$(document).on("click","#applyColor",applyColor);
}