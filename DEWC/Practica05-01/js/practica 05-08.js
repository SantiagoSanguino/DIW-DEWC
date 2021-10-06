window.onload=inicio;
	function inicio(){
		document.formulario.comprobar.onclick=calcularFecha;
	}
	function calcularFecha() {
		const fecha= document.formulario.fecha.value;
		let fechaReal=fecha.toLocaleString("es-ES");
		let esfecha=true;
		/*let numero="0123456789";
		let posicion=0;
		let fechaAux;
		let i=0;
		while(i<fecha.length){
			if(!numero.includes(fecha.charAt(i))){
				posicion++;
			}else{
				guion++;
				if(guion==3&&(posicion>=1&&posicion<=2)){
					fechaAux=fecha.substr(0,posicion);
					fechaReal+=fechaAux;
				}else if(guion==2&&(posicion>=1&&posicion<=2)){
					fechaAux=fecha.substr((i-posicion-1),i-1);
					if(fechaAux<1||fechaAux>12)
						esfecha=false;
					else 
						fechaReal+=fechaAux;
					posicion=0;
				}else if(guion==1&&posicion==4){
					fechaAux=fecha.substr(i-posicion,i);
					if(fechaAux<1||fechaAux>9999)
						esfecha=false;
					else 
						fechaReal+=fechaAux;
					posicion=0;
				}else{
					esfecha=false;
				}
			}
			i++;
		}/**/
		
		
		//if(esfecha)
			document.formulario.mensaje.value=fecha;
		//else
			//document.formulario.mensaje.value="No es una fecha ";
		
	}
