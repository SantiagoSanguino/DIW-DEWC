window.onload=iniciar;
	
	function iniciar() {
		document.primero.onsubmit=esNifCif;
	}
	function esNif(evento) {
		/*
		1 Se ha introducido un NIF correcto. 
		2 Se ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo. 
		3 Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor
		mínimo de 100000. 
		0 Se ha introducido un dato no válido. No es NIF ni un DNI. 
		*/
		let esNif=true;
		let numMensaje=0;
		var arrayMensajes=["Se ha introducido un dato no válido. No es NIF ni un DNI.",
		"Se ha introducido un NIF correcto.","Se ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo.",
		"Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000."];
		/* String Controles
		let caracterControl="TRWAGMYFPDXBNJZSQVHLCKE";
		let letrasiniciales="XYZLKM";
		/* Array Controles*/
		let caracterControl=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V",
			"H","L","C","K","E"];
		let letrasiniciales=["X","Y","Z","L","K","M"];
		let nif=document.primero.nifcif.value;
		//alert("NIF "+nif);
		let niflength=nif.length;
		//let caracter=String.fromCharCode(eventos.charCode);
		//alert("Longitud "+niflength);
		if(niflength>=6 && niflength<=9){
			if(caracterControl.includes(nif[niflength-1])){
				let letra=nif.charCodeAt(niflength-1);
					nif=parseInt(nif,10)+""+parseInt(letra/23,10);
				if(letrasiniciales.includes(nif[0])){
					if(nif[0]=="Y"){
						nif[0]=1;
					} else if(nif[0]=="Z"){
						nif[0]=2;
					}else {
						let letra=nif[0].charCode;
							nif[0]=(letra/23);
					}
					let i=1;
					while(i<niflength-1&&esNif){
						if(nif[i] < "0" || nif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nif>100000){
							numMensaje=3;
						}
					}
				}else if(nif[0] > "0" && nif[0] < "9"){
					let i=1;
					while(i<niflength-1&&esNif){
						if(nif[i] < "0" || nif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nif>100000){
							numMensaje=3;
						}
					}
				}else {
					esNif=false;
					numMensaje=0;
				}
			}else {
				esNif=false;
				numMensaje=2;
			}
		}else {
			esNif=false;
			numMensaje=0;
		}
		alert(arrayMensajes[numMensaje]);
		return esNif;
	}
	
	function esCif(evento) {
		/*
		1 Se ha introducido un CIF correcto. 
		2 Se ha  introducido  un  CIF  erróneo.  El  carácter  de  control  es erróneo. 
		0 Se ha introducido un dato no válido. No es CIF. 
		*/
		let esCif=true;
		let numMensaje;
		var arrayMensajes=["Se ha introducido un dato no válido. No es CIF.",
		"Se ha introducido un CIF correcto.","Se ha  introducido  un  CIF  erróneo.  El  carácter  de  control  es erróneo."];
		/* Array Controles*/
		let caracterControl=["J","A","B","C","D","E","F","G","H","I"];
		
		let letrasiniciales1=["A","H","J","U","V"];
		let letrasiniciales2=["P","Q","R","S","W"];
		let cif=document.primero.nifcif.value;
		let ciflength=cif.length;
		if(ciflength==9){
			if(caracterControl.includes(cif[ciflength-1])){
				if(letrasiniciales1.includes(cif[0])){
					//Caso 1
					let i=1;
					while(i<ciflength-1&&esCif){
						if(cif[i] < "0" || cif[i] > "9"){
							esCif=false;
							numMensaje=0;
						}
						i++;
					}
				}else if(letrasiniciales2.includes(cif[0])){
					//Caso 2
					let i=1;
					while(i<ciflength-1&&esCif){
						if(cif[i] < "0" || cif[i] > "9"){
							esCif=false;
							numMensaje=0;
						}
						i++;
					}
				}else {
					esCif=false;
					numMensaje=0;
				}
				if(esCif){
					let i=1;
					//No se si es la forma más optima
					let sumaImp=0;
					let sumaPar=0;
					let sumaImpMult=0;
					while(i<ciflength-1){
						if(i%2!=0){
							sumaImp+=cif[i];
							sumaImpMult+=cif[i]*2;
						}else {
							sumaPar+=cif[i];
						}
						i++;
					}
					if(sumaImpMult<=9){
						sumaImp=sumaImpMult;
					}
					let sumaDigi=sumaImp+sumaPar;
					let control=sumaDigi%10;
					control=10-control;
						if(control==10){
							control=0;
						}
						if(control>=0&&control<=9){
							if(caracterControl[control]==cif[length-1]){
								numMensaje=1;
							}else {
								esCif=false;
								numMensaje=2;
							}
						}else if(control>10){
							alert("El caracter de control excede el limite "+control);
							esCif=false;
							numMensaje=0;
						}else {
							alert("El caracter de control esta por debajo del limite "+control);
							esCif=false;
							numMensaje=0;
						}
				}
			}else {
				esCif=false;
				numMensaje=0;
			}
		}else {
			esCif=false;
			numMensaje=0;
		}
		alert(arrayMensajes[numMensaje]);
		return esCif;
	}
	
	function esNifCif(evento) {
		
		let esNif=true;
		let esCif=true;
		let numMensaje=0;
		
		/*
		C1 Se ha introducido un cif correcto. 
		C2 Se ha introducido un cif erróneo.  El carácter de control  es erróneo. 
		N1 Se ha introducido un NIF correcto 
		N2 Se  ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo. 
		N3 Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000. 
		0 Se ha introducido un dato no válido. No es CIF.
		*/
		var arrayNIFCIF=["Se ha introducido un dato no válido. No es CIF.",
			"Se ha introducido un cif correcto.",
			"Se ha introducido un cif erróneo.  El carácter de control  es erróneo.",
			"Se ha introducido un NIF correcto",
			"Se  ha  introducido  un  NIF  erróneo.  El  carácter  de  control  es erróneo.",
			"Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000. "
			];
		
		let nifcif=document.primero.nifcif.value;
		let nifciflength=nifcif.length;
		if(nifciflength==9) {
			/* CIF */
			/* Array Controles CIF*/
			let caracterControl=["J","A","B","C","D","E","F","G","H","I"];
			let letrasiniciales1=["A","H","J","U","V"];
			let letrasiniciales2=["P","Q","R","S","W"];
			if(letrasiniciales1.includes(nifcif[0])){
				//Caso 1
				let i=1;
				while(i<nifciflength-1&&esCif){
					if(nifcif[i] < "0" || nifcif[i] > "9"){
						esCif=false;
						numMensaje=0;
					}
					i++;
				}
			}else if(letrasiniciales2.includes(nifcif[0])){
				//Caso 2
				let i=1;
				while(i<nifciflength-1&&esCif){
					if(nifcif[i] < "0" || nifcif[i] > "9"){
						esCif=false;
						numMensaje=0;
					}
					i++;
				}
			}else {
				esCif=false;
				numMensaje=0; //C2
			}
			if(esCif){
				let i=1;
				let sumaImp=0;
				let sumaPar=0;
				let sumaImpMult=0;
				while(i<nifciflength-1){
					if(i%2!=0){
						sumaImp+=nifcif[i];
						sumaImpMult+=nifcif[i]*2;
					}else {
						sumaPar+=nifcif[i];
					}
					i++;
				}
				if(sumaImpMult<=9){
					sumaImp=sumaImpMult;
				}
				let sumaDigi=sumaImp+sumaPar;
				let control=sumaDigi%10;
				control=10-control;
					if(control==10){
						control=0;
					}
					if(control>=0&&control<=9){
						if(caracterControl[control]==nifcif[nifciflength-1]){
							numMensaje=1;
						}else {
							esCif=false;
							numMensaje=2;
							//alert(control);
							// W9437237G  Es un cif valido
						}
					}else {
						esCif=false;
						numMensaje=2;
					}
			}
			if(nifcif&&esCif) {
				esCif=esNifCif;
				if(esCif)
					numMensaje=1; //C1
			}
			esNif=false;
		}else  if(nifciflength>=6 && nifciflength<=9) {
			/* NIF */
			/* Array Controles NIF*/
			let caracterControl=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V",
			"H","L","C","K","E"];
			let letrasiniciales=["X","Y","Z","L","K","M"];
			if(caracterControl.includes(nifcif[nifciflength-1])){
				let letra=nifcif.charCodeAt(nifciflength-1);
					nifcif=parseInt(nifcif,10)+""+parseInt(letra/23,10);
				if(letrasiniciales.includes(nifcif[0])){
					if(nifcif[0]=="Y"){
						nifcif[0]=1;
					} else if(nifcif[0]=="Z"){
						nifcif[0]=2;
					}else {
						let letra=nifcif[0].charCode;
							nifcif[0]=(letra/23);
					}
					let i=1;
					while(i<nifciflength-1&&esNif){
						if(nifcif[i] < "0" || nifcif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nifcif>100000){
							numMensaje=5; // N3
						}
					}
				}else if(nifcif[0] > "0" && nifcif[0] < "9"){
					let i=1;
					while(i<nifciflength-1&&esNif){
						if(nifcif[i] < "0" || nifcif[i] > "9"){
							esNif=false;
							numMensaje=0;
						}
						i++;
					}
					if(esNif){
						if(nifcif>100000){
							numMensaje=5; //N3
						}
					}
				}else {
					esNif=false;
					numMensaje=0;
				}
			}else {
				esNif=false;
				numMensaje=4; //N2
			}
			if(nifcif&&esCif) {
				esNif=esNifCif;
				if(esNif)
					numMensaje=3; // N1
			}
			esCif=false;
		} else {
			esNif=false;
			esCif=false;
			numMensaje=0;
		}
		alert(arrayNIFCIF[numMensaje]);
		if(esNif) {
			return esNif;
		}else if(esCif) {
			return esCif;
		}else {
			return false;
		}
	}
	
	function codigosControl() {
		let codBanco;
		let numSucursal;
		let numCuenta;
		
	}
