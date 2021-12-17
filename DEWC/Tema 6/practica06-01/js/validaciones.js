
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
function comprobarUser(nombre) {
	let sizenombre=nombre.length;
	let esuser=true;
	if(sizenombre>=8&&sizenombre<=12) {
		let i=0;
		let letras="áéíóúñ";
		while(i<sizenombre) {
			caracter=nombre[i].toLowerCase();
			alert(caracter);
			if(i<3) {
				if((caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
					esuser=false;
				}
			}else if(i>=3) {
				if((caracter<"0"||caracter>"9")&&(caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
					esuser=false;
				}
			}
			i++;
		}
	}else {
		esuser=false;
	}
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
function addLocal() {
	let padre=document.getElementById("localidades");
	let vlocal=document.getElementById("localidad").value.trim();
	if(vlocal!="") {
		let allli=padre.getElementsByTagName("li");
		let eslocal=true;		
		let cont=0;
		while (eslocal&&cont < allli.length) {
			let lin=allli.item(cont);
			if (lin.textContent==vlocal) {
				eslocal=false;
			}else if (lin.textContent>vlocal) {
				eslocal=false;
				let newli=document.createElement("li");
				let textolocal=document.createTextNode(vlocal);
				newli.appendChild(textolocal);
				lin.before(newli);
			}
			cont++;
		}
		if(eslocal) {
			let newli=document.createElement("li");
			let textolocal=document.createTextNode(vlocal);
			newli.appendChild(textolocal);
			padre.appendChild(newli);
		}
	}
}
function addCoches() {
	let padre=document.querySelector("#coche>tbody");
	let vmarca=document.getElementById("marca").value.trim();
	let vmodelo=document.getElementById("modelo").value.trim();
	let vprecio=document.getElementById("precio").value.trim();
	if(vmarca!=""&&vmodelo!=""&&vprecio!="") {
		let line=padre.getElementsByTagName("tr");
		let escoche=true;		
		let cont=0;
		while (escoche&&cont < line.length) {
			let lin=line.item(cont);
			let celdas=lin.getElementsByTagName("td");
			if (celdas.item(0).textContent==vmarca&&celdas.item(1).textContent==vmodelo) {
				escoche=false;
				celdas.item(2).textContent=vprecio;
			}else if(celdas.item(0).textContent==vmarca&&celdas.item(1).textContent<vmodelo) {
				escoche=false;
				let newtr=document.createElement("tr");
				let newmarca=document.createElement("td");
				let newprecio=document.createElement("td");
				let textmarca=document.createTextNode(vmarca);
				let textprecio=document.createTextNode(vprecio);
				newmarca.append(textmarca);
				newmodelo.append(textmodelo);
				newprecio.append(textprecio);
				newtr.append(newmarca);
				newtr.append(newmodelo);
				newtr.append(newprecio);
				lin.before(newtr);
			}else if (celdas.item(0).textContent<vmarca) {
				escoche=false;
				let newtr=document.createElement("tr");
				let newmarca=document.createElement("td");
				let newprecio=document.createElement("td");
				let textmarca=document.createTextNode(vmarca);
				let textprecio=document.createTextNode(vprecio);
				newmarca.append(textmarca);
				newmodelo.append(textmodelo);
				newprecio.append(textprecio);
				newtr.append(newmarca);
				newtr.append(newmodelo);
				newtr.append(newprecio);
				lin.before(newtr);
			}
			cont++;
		}
		if(escoche) {
			let newtr=document.createElement("tr");
			let newmarca=document.createElement("td");
			let newmodelo=document.createElement("td");
			let newprecio=document.createElement("td");
			let textmarca=document.createTextNode(vmarca);
			let textmodelo=document.createTextNode(vmodelo);
			let textprecio=document.createTextNode(vprecio);
			newmarca.append(textmarca);
			newmodelo.append(textmodelo);
			newprecio.append(textprecio);
			newtr.append(newmarca);
			newtr.append(newmodelo);
			newtr.append(newprecio);
			padre.append(newtr);
		}
	}
}

function addLocal() {
	let provincias=document.getElementById("comunidades").value;
	
	if(provincias.length==0) {
		return false;
	}else {
		document.getElementById("provincia").value()="Prueba1";
		let newoption=document.createElement("option");
		let textprovi=document.createTextNode("Prueba provincia");
		newmarca.append(textmarca);
		newmodelo.append(textmodelo);
		newprecio.append(textprecio);
		newtr.append(newmarca);
		newtr.append(newmodelo);
		newtr.append(newprecio);
		padre.append(newtr);
	}
}
