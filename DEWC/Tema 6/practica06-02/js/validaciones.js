
/* Añadir definicion */
function addDefin(evento) {
	let vpalabra=$("#palabra").val();
	let vconcepto=$("#concepto").val();
	if($(vpalabra)!=""&&$(vconcepto)!="") {
		let alldt=$("#definicion>dt");
		let espalabra=true;		
		let cont=0;
		
		while (espalabra&&cont < $(alldt).length) {
			if ($(alldt).eq(cont).text()==vpalabra) {
				$(alldt).eq(cont).after("<dd>"+vconcepto+"</dd>");
				espalabra=false;
				console.log("Concepto añadido");
			}
			cont++;
		}
		if (espalabra) {
			$("#definicion").append("<dt>"+vpalabra+"</dt>");
			$("#definicion").append("<dd>"+vconcepto+"</dd>");
			console.log("Definicion añadida");
		}else {
			evento.preventDefault();
		}
	}
}
/* Borrar definicion */
function delDefin() {
	let palabra=$("#palabra").val();
	if($(palabra)!="") {
		let alldt=$("#definicion").children();
		let esencontrado=false;		
		let cont=0;
		
		while (!esencontrado&&cont < $(alldt).length) {
			if ($(alldt).eq(cont).text()==palabra) {
				/*Quito la definicion*/
				let resto=$(alldt).eq(cont).nextUntil("dt");
				for(let i=$(alldt).length-1;i>=0;i--) {
					$(resto).eq(i).remove();
				}
				$(alldt).eq(cont).remove();
				esencontrado=true;
				console.log("Definicion borrada");
			}
			cont++;
		}
	}
}
/* Añadir localidad */
function addLocal() {
	let localidades=$("#localidades").val();
	let vlocal=$("#localidad").val().trim();
	if($(vlocal)!="") {
		let allli=$("#localidades").children();
		let eslocal=true;		
		let cont=0;
		while (eslocal&&cont < $(allli).length) {
			let lin=$(allli).eq(cont).text();
			if ($(allli).eq(cont).text()==$("#localidad").val().trim()) {
				eslocal=false;
			}else if ($(allli).eq(cont).text()<$("#localidad").val().trim()) {
				eslocal=false;
				$(allli).eq(cont).after("<li>"+vlocal+"</li>");
			}
			cont++;
		}/**/	
		if(eslocal) {
			$("#localidades").append("<li>"+vlocal+"</li>");
		}
	}
}
/* Añadir coche */
function addCoche() {
	let coche=$("#coche>tbody");
	let vmarca=$("#marca").val();
	let vmodelo=$("#modelo").val();
	let vprecio=$("#precio").val();
	if($(vmarca)!=""&&$(vmodelo)!="") {
		let line=$(coche).children("tr");
		let escoche=true;		
		let cont=0;
		
		while (escoche&&cont < $(line).length) {
			let celda=$(line).eq(cont).children("td");
			console.log(celda.eq(0).text()+" "+celda.eq(1).text());
			if ( $(celda).eq(0).text()==vmarca&& $(celda).eq(1).text()==vmodelo) {
				escoche=false;
				$(celda).eq(2).text(vprecio);
				console.log("Esta repetido marca y modelo");
				
			}else if($(celda).eq(0).text()>vmarca) {
				escoche=false;
				$(line).eq(cont).before("<tr><td>"+vmarca+"</td><td>"+vmodelo+"</td><td>"+vprecio+"</td></tr>");
				console.log("No esta repetido marca");
				
			}else if($(celda).eq(0).text()==vmarca&& $(celda).eq(1).text()>vmodelo) {
				escoche=false;
				$(line).eq(cont).before("<tr><td>"+vmarca+"</td><td>"+vmodelo+"</td><td>"+vprecio+"</td></tr>");
				console.log("Esta repetido solo marca after");
				
			}
			cont++;
		}
		if(escoche) {
			$(coche).append("<tr><td>"+vmarca+"</td><td>"+vmodelo+"</td><td>"+vprecio+"</td></tr>");
			console.log("Añadir coche");
		}
	}
}
/* Borrar coche */
function delCoche() {
	let coche=$("#coche>tbody");
	let vmarca=$("#marca").val();
	let vmodelo=$("#modelo").val();
	if($(vmarca)!=""&&$(vmodelo)!="") {
		let line=$(coche).children("tr");
		let esborrado=false;		
		let cont=0;
		console.log("Iniciar borrado");
		while (!esborrado&&cont < $(line).length) {
			let celda=$(line).eq(cont).children("td");
			
			if ( $(celda).eq(0).text()==vmarca&& $(celda).eq(1).text()==vmodelo) {
				$(line).eq(cont).remove();
				console.log("Se ha borrado con exito");
				esborrado=true;
			}
			cont++;
		}
		if(!esborrado) {
			alert("No se encontro nada para borrar");
		}
	}
}

function mostrarComunidad() {
	/*Borrar el contenido anterior*/
	let provincias=$("#provincia");
	let comentarios=$("#comentario");
	let prov=$("#provincia>option");
	for(let i=$(prov).length-1;i>=0;i--) {
		$(prov).eq(i).remove();
		console.log("Borrados los comentarios anteriores");
	}
	$(comentarios).text("");
	let comunidad=$("#comunidades").val();
	
	
	/* Hacerlo con arrays asociativos */
	
	let asturias=["Oviedo"];
	let andalucia=["Jaen","Cordoba","Sevilla","Granada"];
	let galicia=["A coruña","Ourense","Pontevedra"];
	let arrayProvin=[asturias,andalucia,galicia];
	let mensajeProvin=["con 1 provincia situada al norte de España","con 9 provincias situada al sur de la peninsula","con 4 provincias","...","...","...","...","..."];
	console.debug(mensajeProvin);
	let position;
	for(let i=0;i<$(arrayProvin).length;i++) {
		if($(arrayProvin)[i]==comunidad) {
			position=$(i);
		}
	}
	console.log(position);
	$(comentarios).eq(0).text(comunidad+" "+mensajeProvin[position]);
	let cont=-1;
	for(let i=$(arrayProvin[position]).length;0<i;i--) {
		$(provincias).eq(i).after("<option>"+arrayProvin[position][i]+"</option>");
		console.log(arrayProvin[position][i]);
	} /* */
	console.log(comunidad);
}

function applyColor() {
	let coches=$("#coche>tbody");
	let par="rgb("+getRgbNumber()+","+getRgbNumber()+","+getRgbNumber()+")";
	let impar="rgb("+getRgbNumber()+","+getRgbNumber()+","+getRgbNumber()+")";
	let line=$(coches).children("tr");
	for(let i=0;i<$(line).length;i++) {
		if(i%2==0){
			$(line).eq(i).css("backgroundColor",par);
		}else {
			$(line).eq(i).css("backgroundColor",impar);
		}
	}
	//alert("rgb("+getRgbNumber()+","+getRgbNumber()+","+getRgbNumber()+")");
	console.log(par+" - "+impar);
}

function getRgbNumber() {
	/* Un numero entre 0 y 255 */
	let min=0;
	let max=255;
	return Math.floor(Math.random()* max - min);
}
