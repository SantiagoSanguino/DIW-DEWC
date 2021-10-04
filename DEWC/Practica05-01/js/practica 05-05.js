window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=convertirCadena;
	}
	function convertirCadena() {
		let consonans=0;
		let vocals=0;
		let voc="aeiouáéíóú";
		let con="bcdfghjklmnñopqrstvwxyz";
		let cadena= document.formulario.cadena.value.toLowerCase();
		for(let i=0;i<cadena.length;i++) {
			if(voc.includes(cadena.charAt(i))){
				vocals+=1;
			}
			if(con.includes(cadena.charAt(i))) {
				consonans+=1;
			}
		}
		if(vocals>0)
			document.formulario.vocales.value="Hay "+vocals+" vocales";
		else
			document.formulario.vocales.value="No hay vocales";
		if(consonans>0)
			document.formulario.consonantes.value="Hay "+consonans+" consonantes";
		else
			document.formulario.consonantes.value="No hay consonantes";
	}
