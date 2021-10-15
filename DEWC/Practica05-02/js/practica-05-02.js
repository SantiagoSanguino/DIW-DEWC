window.onload=iniciar;

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
		let mensaje;
		let enviar=true;
		let caracter=String.fromCharCode(eventos.charCode);
		if(caracter < "0" || caracter > "9" || caracter==32){
			enviar=false;
			//alert("No se permiten caracteres distintos de numeros");
		}
		return enviar;
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
	function imgAfic(evento) {
		let eventos=evento||window.event;
		var afic=eventos.target.value;
		document.primero.img_aficion.src="imagenes/"+afic+".jpg";
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