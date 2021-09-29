window.onload=calcularPrimos;
	
	function calcularPrimos() {
			var numero=2,cont=0;
			while (cont<=100){
					var primo=true,i=2;
					while (i<numero && primo) {
						if (numero%i==0)
							primo=false
						
						i++;
					}
					numero++;
					if(primo){
						// Para comprobar si el contandor funciona bien
						//document.formulario.calcular.value+=(i+" - "+ cont+" | ");
						document.formulario.calcular.value+=(i+" | ");
						cont++;
					}
					
			}
			
	}