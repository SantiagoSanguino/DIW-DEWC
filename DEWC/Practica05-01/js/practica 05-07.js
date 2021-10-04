window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=convertirCadena;
	}
	function convertirCadena() {
		let nombre= document.formulario.nombre.value.toLowerCase();
		let adicionales="ñáéíóúüºª- ";
		let esnombre=true;
		if ((nombre.charAt(0)<"a"||nombre.charAt(0)>"z")&&!adicionales.includes(nombre.charAt(0))) {
				esnombre=false;
		}else if ((nombre.charAt(nombre.length-1)<"a"||nombre.charAt(nombre.length-1)>"z")&&!adicionales.includes(nombre.charAt(cadena.length -1))) {
				esnombre=false;
		}else if (nombre.length < 3) {
				esnombre=false;
		}else if (nombre.length < 3 || nombre.length > 27) {
				esnombre=false;
		}else{
			let i=0;
			while(esnombre&&i<nombre.length){
				if ((nombre.charAt(i)<"a"||nombre.charAt(i)>"z")&&!adicionales.includes(nombre.charAt(i)))
					esnombre=false;
				i++;
			}
		}
		if(esnombre)
			document.formulario.mensaje.value="Si es un nombre ";
		else
			document.formulario.mensaje.value="No es un nombre valido ";
		
	}
	