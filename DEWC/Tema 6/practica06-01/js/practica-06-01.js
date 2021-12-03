if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	var BtnMostrar=document.getElementById("registrarse");
	var BtnOcultar=document.getElementById("ocultarR");
	if (document.addEventListener) {
		BtnMostrar.addEventListener("click",registrar);
		BtnOcultar.addEventListener("click",ocultarR);
	} else if (document.attachEvent) {
		BtnMostrar.attachEvent("onclick",registrar);
		BtnOcultar.attachEvent("onclick",ocultarR);
	}
	var BtnMostrar=document.getElementById("iniciarsesion");
	var BtnOcultar=document.getElementById("ocultarE");
	if (document.addEventListener) {
		BtnMostrar.addEventListener("click",iniciosesion);
		BtnOcultar.addEventListener("click",ocultarE);
	} else if (document.attachEvent) {
		BtnMostrar.attachEvent("onclick",iniciosesion);
		BtnOcultar.attachEvent("onclick",ocultarE);
	}
	var boton=document.getElementById("addDefinicion");
	if (document.addEventListener) {
		boton.addEventListener("click",addDefin)
	}else if (document.attachEvent) {
		boton.attachEvent("onclick",addDefin);
	}
}