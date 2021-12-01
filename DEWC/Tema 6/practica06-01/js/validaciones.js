
function crearDefinicion() {
	let boton=document.getElementById("addDefinicion");
	if (document.addEventListener)
		boton.addEventListener("click",addDefinicion)
	else if (document.attachEvent)
		boton.attachEvent("onclick",addDefinicion);
}
function addDefinicion() {
	let padre=document.getElementById("definicion");
	let vpalabra=document.getElementsByName("palabra").value.trim();
	let newdt=document.createElement("dt");
	let vconcepto=document.getElementsByName("concepto").value;
	let newdd=document.createElement("dd");
	let textopal=document.createTextNode(vpalabra);
	let textocon=document.createTextNode(vconcepto);
	if(vpalabra!=""&&vconcepto!="") {
		
	}
}