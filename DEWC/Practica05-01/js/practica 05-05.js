window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=convertirCadena;
	}
	function convertirCadena() {
		var i,consans=0,vocals=0,voc="aeiouAEIOU",texto= document.formulario.cadena.value;
		document.formulario.prueba.value=texto;
		for(i=0;i<texto.length-1;i++) {
			letra=texto.charAt(i);
			if(voc.includes(letra.charAt(i))) {
				vocals++;
			}else {
				consans++;
				
			}
		}
		document.formulario.vocales.value=vocals;
		document.formulario.consonantes.value=consans;
		
	}
	