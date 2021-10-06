window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=comprobarEmail;
	}
	function comprobarEmail() {
		let email= document.formulario.email.value.toLowerCase();
		let adicionales="ñáéíóúü-.0123456789";
		let escorreo=true;
		let arroba=false;
		let i=0;
		while(i<email.length&&escorreo){
			if(i==0){
				if (email.charAt(i)<"a"||email.charAt(i)>"z") {
					escorreo=false;
				}
			}else if(email.charCodeAt(i)==64&&!arroba){
				arroba=true;
				i++;
				if ((email.charAt(i)<"a"||email.charAt(i)>"z")){
					escorreo=false;
				}
			}else if(email.charAt(i)=="."&&arroba){
				i++;
				if(email.length-i>=2&&email.length-i<=4){
					while(i<email.length&&escorreo){
						if (email.charAt(i)<"a"||email.charAt(i)>"z"){
							escorreo=false;
						}
						i++;
					}
				}else{
					escorreo=false;
				}
			}else if ((email.charAt(i)>="a"&&email.charAt(i)<="z")||adicionales.includes(email.charAt(i))){
					escorreo=true;
			}else{
				escorreo=false;
				//document.formulario.mensaje2.value=email.charCodeAt(i)+" Error "+email.charAt(i);
			}
			i++;
		}
		if(escorreo){
			document.formulario.mensaje.value="Es un correo valido "+email;
		}else{ 
			document.formulario.mensaje.value="No es un correo valido";
		}
		
		//document.formulario.mensaje2.value="Error"+email.charAt(i);
	}
