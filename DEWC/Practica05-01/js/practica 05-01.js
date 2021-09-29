window.onload=calcularPrimos;
	
	function calcularPrimos() {
			for (var numero = 2;numero<=100; numero++) {
					var primo=true,i=2;
					while (i<numero && primo) {
						if (numero%i==0)
							primo=false;
						i++;
					}
					if(primo)
						document.formulario.calcular.value+=(i+" | ");
			}
			
	}