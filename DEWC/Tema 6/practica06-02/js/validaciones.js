
function addDefin(evento) {
	let vpalabra=$("#palabra").val();
	let vconcepto=$("#concepto").val();
	if($(vpalabra)!=""&&$(vconcepto)!="") {
		let alldt=$("#definicion>dt");
		let espalabra=true;		
		let cont=0;
		console.log(event.data);
		while (espalabra&&cont < alldt.length) {
			if (alldt[cont].textContent==vpalabra) {
				alldt[cont].after("<dd>"+vconcepto+"</dd>");
				espalabra=false;
			}
			cont++;
		}
		if (espalabra) {
			$("#definicion").append("<dt>"+vpalabra+"</dt>");
			$("#definicion").append("<dd>"+vconcepto+"</dd>");
		}else {
			evento.preventDefault();
		}
	}
}
/*
function delDefin() {
	
	let definicion=document.getElementById("definicion");
	let palabra=document.getElementById("palabra");
	if(palabra!="") {
		let alldt=definicion.getElementsByTagName("dt");
		let esencontrado=false;		
		let cont=0;
		while (!esencontrado&&cont < alldt.length) {
			if (alldt[cont].textContent==palabra.value) {
				/*Quito la definicion*/	/*
				let dt=document.createElement("dt");
				while(palabra.firstChild) {
					palabra.removeChild(palabra.firstChild);
				}
				esencontrado=true;
			}
			cont++;
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
				newli.append(textolocal);
				lin.before(newli);
			}
			cont++;
		}/**/	/*
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

function mostrarComunidad() {
	/*Borrar el contenido anterior*/	/*
	let provincias=document.getElementById("provincia");
	let comentarios=document.getElementById("comentario");
	while(provincias.firstChild) {
		provincias.removeChild(provincias.firstChild);
	}
	comentarios.removeChild(comentarios.firstChild);
	
	let comunidades=document.getElementById("comunidades");
	let comunidad=comunidades.selectedIndex;
	let asturias=["Oviedo"];
	let andalucia=["Jaen","Cordoba","Sevilla","Granada"];
	let galicia=["A coruña","Ourense","Pontevedra"];
	let arrayProvin=[asturias,andalucia,galicia];
	let mensajeProvin=["con 1 provincia situada al norte de España","con 9 provincias situada al sur de la peninsula","con 4 provincias","...","...","...","...","..."];
	
	let newtext=document.createElement("p");
	let mensprovi=document.createTextNode(comunidades.value+" "+mensajeProvin[comunidad]);
	newtext.appendChild(mensprovi);
	comentario.appendChild(newtext);
	for(let i=0;i<arrayProvin[comunidad].length;i++) {
		let newoption=document.createElement("option");
		let textprovi=document.createTextNode(arrayProvin[comunidad][i]);
		newoption.appendChild(textprovi);
		provincia.appendChild(newoption);
	}
	
}
*/