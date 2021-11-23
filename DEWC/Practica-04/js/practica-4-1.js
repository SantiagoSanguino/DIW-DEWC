window.onload=iniciar;
	
	function iniciar() {
		document.formulario.resultado.onkeydown=lectura;
		document.formulario.enviar.onclick=enviado;
	}
	function enviado() {
		mostrarMedia();
	}