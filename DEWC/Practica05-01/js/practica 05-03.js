window.onload=inicio;
	function inicio(){
		document.formulario.calcular.onclick=calcularPrimos;
	}
	function calcularPrimos() {
		let numeroInicial = document.formulario.numeroInicial.value;
		let numeroFinal = document.formulario.numeroFinal.value;
		while (numeroInicial<=numeroFinal){
			var primo=true,i=2;
			while (i<numeroInicial && primo) {
				if (numeroInicial%i==0)
					primo=false
				
				i++;
			}
			
			if(primo&&numeroInicial>1){
				document.formulario.numerosPrimos.value+=(numeroInicial+" | ");
			}
			numeroInicial++;
		}	
	}