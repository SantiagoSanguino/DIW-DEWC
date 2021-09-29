window.onload=inicio;
	function inicio(){
		document.formulario.convertir.onclick=convertirDecimal;
	}
	function convertirDecimal() {
		var bin=0,oct="",hex="",dec=document.formulario.decimal.value,i;
		
		//Calcular binario
		i=dec;
		if(i>0&&i<4){
			while(i/2>0){
				if(i/2>=2){
					bin=+(i%2);
					i/=2;
				}
				if(i!=0){
					bin=+i;
					i-=i;
				}
			}
			bin="0"+bin.toString(2);
		}else{
			while(i/2>0){
				if(i/2>=2){
					bin=+(i%2);
					i/=2;
				}
				if(i!=0){
					bin=+i;
					i-=i;
				}
			}
			bin="0"+bin.toString(2);
			bin*=10;
		}
		document.formulario.binario.value=bin;
		
		//Calcular octal
		octalStr=dec;
		oct=parseInt(octalStr,8);
		document.formulario.octal.value=oct;
		
		//Calcular hexadecimal
		hexStr=dec;
		hex=parseInt(hexStr,16);
		document.formulario.hexadecimal.value=hex;
		/**/
	}
	