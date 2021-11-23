window.onload=iniciar;
	
	function iniciar() {
		document.formulario.max1.onkeydown=lectura;
		document.formulario.max2.onkeydown=lectura;
		document.formulario.enviar.onclick=enviado;
	}
	function enviado() {
		mostrarMaximos();
	}