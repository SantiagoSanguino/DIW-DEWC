window.onload=iniciador;

	function iniciador() {
		iniciar();
		bienvenida();
	}

	function iniciar() {
		//Opciones de la funcion selectfocus con onfocus
		document.primero.nif.onfocus=selectfocus;
		document.primero.nombre.onfocus=selectfocus;
		document.primero.apellidos.onfocus=selectfocus;
		document.primero.domicilio.onfocus=selectfocus;
		document.primero.localidad.onfocus=selectfocus;
		document.primero.cp.onfocus=selectfocus;
		document.primero.provincia.onfocus=selectfocus;
		//Opciones de la funcion selectblur con onblur
		document.primero.nif.onblur=selectblur;
		document.primero.nombre.onblur=selectblur;
		document.primero.apellidos.onblur=selectblur;
		document.primero.domicilio.onblur=selectblur;
		document.primero.localidad.onblur=selectblur;
		document.primero.cp.onblur=selectblur;
		document.primero.provincia.onblur=selectblur;
		// Codigo postal //onchange
		document.primero.nombre.onkeypress=solonletras;
		document.primero.apellidos.onkeypress=solonletras;
		document.primero.localidad.onkeypress=solonletras;
		document.primero.cp.onkeypress=solonumero;
		document.primero.cp.onkeyup=selectprovincia;
		//No puede ser onblur porque sobreescribe al otro onblur
		document.primero.onkeydown=fondoformulario;
		//Provincias
		document.primero.provin[0].onmouseup=imgProvin;
		document.primero.provin[1].onmouseup=imgProvin;
		document.primero.provin[2].onmouseup=imgProvin;
		document.primero.provin[3].onmouseup=imgProvin;
		//Aficciones
		document.primero.viajar.onmouseup=imgAfic;
		document.primero.leer.onmouseup=imgAfic;
		document.primero.musica.onmouseup=imgAfic;
		document.primero.cine.onmouseup=imgAfic;
		document.primero.deporte.onmouseup=imgAfic;
		document.primero.cenar.onmouseup=imgAfic;
		// Reset
		document.primero.reset.onmouseup=limpiarDoc;
		// Submit
		document.primero.onsubmit=esNif;
		var aficiones = setInterval(contador,10000);
	}
	function bienvenida(){
		let mensaje="Bienvenido a la pagina web";
		alert(mensaje);
	}
	function selectfocus(evento) {
		let eventos=evento||window.event;
		var elemento=eventos.target;
			elemento.style.backgroundColor="red";
	}
	function selectblur(evento) {
		let eventos=evento||window.event;
		var elemento=eventos.target;
			elemento.style.backgroundColor="white";
	}
	function solonumero(evento) {
		let eventos=evento||window.event;
		let enviar=true;
		let caracter=String.fromCharCode(eventos.charCode);
		if(caracter < "0" || caracter > "9" || caracter==32){
			enviar=false;
			//alert("No se permiten caracteres distintos de numeros");
		}
		return enviar;
	}
	function solonletras(evento) {
		let eventos=evento||window.event;
		let enviar=true;
		let letrasespeciales="ÁÉÍÓÚÑñáéúíóü ";
		
		let caracter=String.fromCharCode(eventos.charCode);
		if((caracter < "a" || caracter > "z")&&(caracter < "A" || caracter > "Z")){
			if(!letrasespeciales.includes(caracter)){
				enviar=false;
			}
		}
		if(enviar) {
			return enviar;
		}else {
			return enviar;
		}
	}
	function selectprovincia(evento) {
		let eventos=evento||window.event;
		var elemento=eventos.target;
		var arrayProvincia=[null,"Araba/Álava","Albacete","Alicante/Alacant","Almería","Ávila","Badajoz",
		"Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón/Castelló","Ciudad Real","Córdoba",
		"A Coruña","Cuenca","Gerona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén",
		"León","Lérida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Orense","Asturias",
		"Palencia","Las Palmas","Pontevedra","Salamanca","Santa Cruz de Tenerife","Cantabria",
		"Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia/València","Valladolid",
		"Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];
		let cp=elemento.v
		if(elemento.value>0&&elemento.value<arrayProvincia.length)
			document.primero.provincia.value=arrayProvincia[elemento.value];
		else
			document.primero.provincia.value=null;
	}
	
	var contimg=0;
	function fondoformulario(evento) {
		let eventos=evento||window.event;
		var arrayFondos=["url('imagenes/Paris Torre Eiffel.jpg')","url('imagenes/Venecia Plaza San Marcos.jpg')",
		"url('imagenes/lisboa torre belem.jpg')","url('imagenes/atena acropoli.jpg')","url('imagenes/roma fontana di trevi.jpg')"];
		if (eventos.ctrlKey && eventos.keyCode==114){
			document.primero.style.backgroundImage=arrayFondos[contimg];
			document.primero.style.backgroundRepeat="no-repeat";
			contimg++;
		}
	}
	function fondoProvin(evento) {
		let eventos=evento||window.event;
		var provin=eventos.target.value;
		document.primero.imgprovincia.src="imagenes/"+provin+".jpg";
	}
	function imgProvin(evento) {
		let eventos=evento||window.event;
		var provin=eventos.target.value;
		document.primero.imgprovincia.src="imagenes/"+provin+".jpg";
	}
	
	var aficiones=["viajar","leer","musica","cine","deporte","cenar"];
	var esaficiones=[false,false,false,false,false,false];
	function imgAfic(evento) {
		let eventos=evento||window.event;
		var afic=eventos.target.value;
		for(var i=0;i<aficiones.length;i++){
			if(aficiones[i]==afic){
				if(esaficiones[i]){
					esaficiones[i]=false;
				}else {
					esaficiones[i]=true;
					document.primero.img_aficion.src="imagenes/"+afic+".jpg";
				}
			}
		}
	}
	function contador(){
		cambiarImg();
	}
	function cambiarImg(){
		var contImg=0;
		var esimg=false;
		while(contImg<esaficiones.length&&!esimg){
			var img=Math.round(Math.random()*6);
			if(esaficiones[img]){
				document.primero.img_aficion.src="imagenes/"+aficiones[img]+".jpg";
				esimg=true;
			}
			contImg++;
		}
	}
	function limpiarDoc() {
		clearInterval(aficiones);
		
		document.primero.imgprovincia.src="./";
		document.primero.img_aficion.src="./";
		//Cambio 
		
	}
	
	function esNif(evento) {
		/*
		1 Se ha introducido un NIF correcto. 
		2 Se ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo. 
		3 Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor
		mínimo de 100000. 
		0 Se ha introducido un dato no válido. No es NIF ni un DNI. 
		*/
		let esNif=true;
		let numMensaje=1;
		var arrayMensajes=["Se ha introducido un dato no válido. No es NIF ni un DNI.",
		"Se ha introducido un NIF correcto.","Se ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo.",
		"Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000."];
		/* String Controles
		let caracterControl="TRWAGMYFPDXBNJZSQVHLCKE";
		let letrasiniciales="XYZLKM";
		/* Array Controles*/
		let caracterControl=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V",
			"H","L","C","K","E"];
		let letrasiniciales=["X","Y","Z","L","K","M"];
		let nif=document.primero.nif.value;
		//alert("NIF "+nif);
		let niflength=nif.length;
		//let caracter=String.fromCharCode(eventos.charCode);
		alert("Longitud "+niflength);
		if(niflength>=6 && niflength<=9){
			alert("Correcto1");
			if(caracterControl.includes(nif[niflength-1])){
				alert("Correcto2");
				let letra=nif.charCodeAt(niflength-1);
				alert(parseInt(letra/23,10));
					nif=parseInt(nif,10)+""+parseInt(letra/23,10);
					alert(nif);
				if(letrasiniciales.includes(nif[0])){
					alert("Correcto3");
					if(nif[0]=="Y"){
						nif[0]=1;
					} else if(nif[0]=="Z"){
						nif[0]=2;
					}else {
						let letra=nif[0].charCode;
							nif[0]=(letra/23);
					}
					let i=1;
					alert(nif);
					while(i<niflength-1&&esNif){
						if(nif[i] < "0" || nif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nif>100000){
							numMensaje=3;
						}
					}
				}else if(nif[0] > "0" && nif[0] < "9"){
					alert("Correcto4");
					let i=1;
					while(i<niflength-1&&esNif){
						if(nif[i] < "0" || nif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nif>100000){
							numMensaje=3;
						}
					}
				}else {
					esNif=false;
					numMensaje=0;
				}
			}else {
				esNif=false;
				numMensaje=2;
			}
		}else {
			esNif=false;
			numMensaje=0;
		}
		alert(arrayMensajes[numMensaje]);
		return esNif;
	}
	function esNombre(){
		
	}
	/*funcion comprobar(evento){
		let eventos=evento||window.event;
		let mensaje="";
		let enviar=true;
		if(document.primero.cp.value===null){
			enviar=false;
			mensaje+="No hay valores en el codigo postal";
		}
		if(!enviar)
			alert(mensaje);
		return enviar;
	}/**/
