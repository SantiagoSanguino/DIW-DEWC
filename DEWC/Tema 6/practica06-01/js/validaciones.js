
function registrar(){
	document.getElementById("regist").setAttribute("open",true);
}
function ocultarR(){
	document.getElementById("regist").removeAttribute("open");
}
function iniciosesion(){
	document.getElementById("entrar").setAttribute("open",true);
}
function ocultarE(){
	document.getElementById("entrar").removeAttribute("open");
}
function addDefin() {
	let padre=document.getElementById("definicion");
	let vpalabra=document.getElementById("palabra").value;
	let vconcepto=document.getElementById("concepto").value;
	if(vpalabra!=""&&vconcepto!="") {
		let alldt=padre.getElementsByTagName("dt");
		let espalabra=true;		
		let cont=0;
		while (espalabra&&cont < alldt.length) {
			if (alldt[cont].textContent==vpalabra) {
				espalabra=false;
			}
			cont++;
		}
		let newdd=document.createElement("dd");
		let textocon=document.createTextNode(vconcepto);
		if(espalabra) {
			let newdt=document.createElement("dt");
			let textopal=document.createTextNode(vpalabra);
			newdt.appendChild(textopal);
			padre.appendChild(newdt);
			newdd.appendChild(textocon);
			padre.appendChild(newdd);
		}else {
			newdd.appendChild(textocon);
			padre.insertBefore(newdd,alldt[cont]);
		}
	}
}

