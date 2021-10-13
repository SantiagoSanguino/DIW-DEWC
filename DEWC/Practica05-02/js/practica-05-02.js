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
	}
	function selectfocus(evento) {
		let eventos=evento||window.event;
		var elemento=eventos.target;
			elemento.style.backgroundColor="red";
			elemento.value="";
	}
	function selectblur(evento) {
		let eventos=evento||window.event;
		var elemento=eventos.target;
			elemento.style.backgroundColor="white";
			elemento.value="";
	}
