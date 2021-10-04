window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=convertirCadena;
	}
	function convertirCadena() {
		let esrepetida=false;
		let essubcadena=false;
		let repetida=0;
		let cadena= document.formulario.cadena.value.toLowerCase();
		let vocsub=	document.formulario.vocalsub.value.toLowerCase();
		for(let i=0;i<cadena.length;i++) {
			if(vocsub.length==1){
				if(vocsub==cadena.charAt(i)){
					repetida+=1;
					esrepetida=true;
				}
			}else{
				let j=repetida;
				let esencontrada=false;
				if(vocsub.charAt(j)==cadena.charAt(i)){
					repetida+=1;
					esrepetida=true;
					esencontrada=true;
				}else{//Correccion para evitar que sino esta continua cuente
					repetida=0;
					esencontrada=false;
				}
				if(repetida==vocsub.length&&esencontrada)
					essubcadena=true;
			}
		}
		if(esrepetida){
			if(vocsub.length>1){
				if(essubcadena)
					document.formulario.mensaje.value="Si esta repetida la subcadena "+vocsub.toString()+" en la cadena";
				else
					document.formulario.mensaje.value="La subcadena no es igual";
			}else{
				document.formulario.mensaje.value="Hay "+repetida+" vocales repetidas en la cadena";
			}
		}else{
			document.formulario.mensaje.value="No hay vocales o subcadenas iguales ";
		}
	}
	
