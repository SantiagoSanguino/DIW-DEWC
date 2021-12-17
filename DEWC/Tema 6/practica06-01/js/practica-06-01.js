
if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio);

function inicio(){
	var BtnMostrarR=document.getElementById("registrarse");
	var BtnOcultarR=document.getElementById("ocultarR");
	var BtnMostrarE=document.getElementById("iniciarsesion");
	var BtnOcultarE=document.getElementById("ocultarE");
	var BtnDefi=document.getElementById("addDefinicion");
	var BtnLocal=document.getElementById("addLocalidad");
	var BtnCoche=document.getElementById("addCoche");
	var BtnComun=document.getElementById("comunidades");
	if (document.addEventListener) {
		BtnMostrarR.addEventListener("click",registrar);
		BtnOcultarR.addEventListener("click",ocultarR);
		BtnMostrarE.addEventListener("click",iniciosesion);
		BtnOcultarE.addEventListener("click",ocultarE);
		BtnDefi.addEventListener("click",addDefin);
		BtnLocal.addEventListener("click",addLocal);
		BtnCoche.addEventListener("click",addCoches);
		BtnComun.addEventListener("change",mostrarComunidad);
	} else if (document.attachEvent) {
		BtnMostrarR.attachEvent("onclick",registrar);
		BtnOcultarR.attachEvent("onclick",ocultarR);
		BtnMostrarE.attachEvent("onclick",iniciosesion);
		BtnOcultarE.attachEvent("onclick",ocultarE);
		BtnDefi.attachEvent("onclick",addDefin);
		BtnLocal.attachEvent("onclick",addLocal);
		BtnCoche.attachEvent("onclick",addCoches);
		BtnComun.attachEvent("onchange",mostrarComunidad);
	}
	
	/*
	//Registrarse
	var BtnMostrar=document.getElementById("registrarse");
	var BtnOcultar=document.getElementById("ocultarR");
	if (document.addEventListener) {
		BtnMostrar.addEventListener("click",registrar);
		BtnOcultar.addEventListener("click",ocultarR);
	} else if (document.attachEvent) {
		BtnMostrar.attachEvent("onclick",registrar);
		BtnOcultar.attachEvent("onclick",ocultarR);
	}
	//Iniciar Sesion
	var BtnMostrar=document.getElementById("iniciarsesion");
	var BtnOcultar=document.getElementById("ocultarE");
	if (document.addEventListener) {
		BtnMostrar.addEventListener("click",iniciosesion);
		BtnOcultar.addEventListener("click",ocultarE);
	} else if (document.attachEvent) {
		BtnMostrar.attachEvent("onclick",iniciosesion);
		BtnOcultar.attachEvent("onclick",ocultarE);
	}
	//Añadir Definicion
	var boton=document.getElementById("addDefinicion");
	if (document.addEventListener) {
		boton.addEventListener("click",addDefin)
	}else if (document.attachEvent) {
		boton.attachEvent("onclick",addDefin);
	}
	//Añadir Localidad
	var boton=document.getElementById("addLocalidad");
	if (document.addEventListener) {
		boton.addEventListener("click",addLocal)
	}else if (document.attachEvent) {
		boton.attachEvent("onclick",addLocal);
	}
	//Añadir Coche
	var boton=document.getElementById("addCoche");
	if (document.addEventListener) {
		boton.addEventListener("click",addCoches)
	}else if (document.attachEvent) {
		boton.attachEvent("onclick",addCoches);
	}
	//Seleccionar comunidad
	var boton=document.getElementById("comunidades");
	if (document.addEventListener) {
		boton.addEventListener("change",mostrarComunidad)
	}else if (document.attachEvent) {
		boton.attachEvent("onchange",mostrarComunidad);
	}/**/
}