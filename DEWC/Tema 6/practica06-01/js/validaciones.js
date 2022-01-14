
function menuRegistrar(){
	document.getElementById("regist").setAttribute("open",true);
}
function registrar(){
	let usuario=document.getElementById("user1").value;
	let password=document.getElementById("pass1").value;
	let userSize=usuario.length;
	let passSize=password.length;
	let esvalido=true;
	if((userSize>7&&userSize<13)||(passSize>7&&passSize<15)) {
		let letras="áéíóúñ";
		for(let i=0;i<userSize;i++) {
			let caracter=usuario.charAt(i).toLowerCase();
			if(i<3) {
				if((caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
					esvalido=false;
				}
			}else if((caracter<"0"||caracter>"9")&&(caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
				esvalido=false;
			}
		}
		for(let i=0;i<passSize;i++) {
			let caracter=password[i].charAt(i).toLowerCase();
			if(i<2) {
				if((caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
					esvalido=false;
				}
			}else if(i==passSize-1){
				if((caracter<"0"||caracter>"9")&&(caracter<"a"||caracter>"z")&&!caracter.includes(letras)) {
					esvalido=false;
				}
			}else if(i>=2&&i<passSize-1) {
				let letrasSub="áéíóúñ_";
				if((caracter<"0"||caracter>"9")&&(caracter<"a"||caracter>"z")&&!caracter.includes(letrasSub)) {
					esvalido=false;
				}
			}
		}
	}else {
		esvalido=false;
	}
	if(esvalido){
		document.cookie= usuario+"="+password+";max-age="+(24*60*60)+"; path=/";
		document.getElementById("regist").removeAttribute("open");
	}
}
function ocultarMenuR(){
	document.getElementById("regist").removeAttribute("open");
}
function menuIniciosesion(){
	document.getElementById("entrar").setAttribute("open",true);
}
function iniciosesion(){
	let usuario=document.getElementById("user2").value;
	let password=document.getElementById("pass2").value;
	
	document.getElementById("entrar").removeAttribute("open");
}
function ocultarMenuE(){
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
				newli.append(textolocal);
				lin.before(newli);
			}
			cont++;
		}/**/
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
	/*Borrar el contenido anterior*/
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
