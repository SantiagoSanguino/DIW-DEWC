
if (document.addEventListener) {
	window.addEventListener("load",boton);
	window.addEventListener("load",mostrarArchivo);
}else if (document.attachEvent) {
	window.attachEvent("onload",boton);
	window.attachEvent("onload",mostrarArchivo);
}

function boton() {
	//document.getElementsByClassName("boton").button;
}

function mostrarArchivo() {
	let archivo;
	console.log("Funciona");
	if(window.XMLHttpRequest) {
		archivo=new XMLHttpRequest();
	}else if(window.ActiveXObject) {
		archivo=new ActiveXObject("Microsoft.XMLHTTP");
	}
}