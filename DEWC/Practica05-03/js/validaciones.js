window.onload=iniciar;
	
	function iniciar() {
		document.primero.onsubmit=enviado;
		document.primero.codban.onkeypress=solonumero;
		document.primero.numsuc.onkeypress=solonumero;
		document.primero.numcue.onkeypress=solonumero;
	}
	function enviado() {
		comprobarNombre();
		esNifCif();
		codigosControl();
		//calculoIBANEspanya();
		comprobarIBAN();
	}
	function solonumero(evento) {
		let eventos=evento||window.event;
		let enviar=true;
		let caracter=String.fromCharCode(eventos.charCode);
		if(caracter < "0" || caracter > "9" || caracter==32){
			enviar=false;
			//alert("No se permiten caracteres distintos de numeros");
		}
		return enviar;
	}
	function solonletras(evento) {
		let eventos=evento||window.event;
		let enviar=true;
		let letrasespeciales="ÁÉÍÓÚÑñáéúíóü ";
		
		let caracter=String.fromCharCode(eventos.charCode);
		if((caracter < "a" || caracter > "z")&&(caracter < "A" || caracter > "Z")){
			if(!letrasespeciales.includes(caracter)){
				enviar=false;
			}
		}
		if(enviar) {
			return enviar;
		}else {
			return enviar;
		}
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
	// file:///Z:/DWEC/Practica05-03/practica-5-03.html
	function codigosControl() {
		let codBanc=document.primero.codbanco.value+"";
		let numSucu=document.primero.codoficina.value+"";
		//let codContr=document.primero.codcontrol.value+"";
		let numCuent=document.primero.numcuenta.value+"";
		let numero1=((codBanc.charAt(0)*4)+(codBanc.charAt(1)*8)+(codBanc.charAt(2)*5)+(codBanc.charAt(3)*10));
		let numero2=((numSucu.charAt(0)*9)+(numSucu.charAt(1)*7)+(numSucu.charAt(2)*3)+(numSucu.charAt(3)*6));
		//resto1=(numero1+numero2)%11;
		let modulo11_1=11-((numero1+numero2)%11);
		if(modulo11_1==10){modulo11_1=1;
		}else if(modulo11_1==11){modulo11_1=0;}
		let numero3=((numCuent.charAt(0)*1)+(numCuent.charAt(1)*2)+(numCuent.charAt(2)*4)+
		(numCuent.charAt(3)*8)+(numCuent.charAt(4)*5)+(numCuent.charAt(5)*10)+(numCuent.charAt(6)*9)+
		(numCuent.charAt(7)*7)+(numCuent.charAt(8)*3)+(numCuent.charAt(9)*6));
		//resto2=numero3%11;
		let modulo11_2=11-(numero3%11);
		if(modulo11_2==10){modulo11_2=1;
		}else if(modulo11_2==11){modulo11_2=0;}
		alert(modulo11_1+'-'+modulo11_2);
	}
	
	function calculoIBANEspanya() {
		let IBAN=document.primero.iban.value+"";
		let codigoCuenta="";
		let pais=(IBAN.charAt(0))+(IBAN.charAt(1));
		if(pais=="ES") {
			pais=1428+(IBAN.charAt(2))+(IBAN.charAt(3));
			for(let i=4;i<IBAN.length;i++){
				codigoCuenta+=IBAN.charAt(i)+"";
			}
			codigoCuenta+=pais;
		}
		//resto3=codigoCuenta%97;
		let codigoControl=98-(codigoCuenta%97);
		if(codigoControl<10){
			codigoControl=""+0+codigoControl;
		}
		alert(codigoControl);
		
	}
	function comprobarIBAN() {
		let IBAN=document.primero.iban.value+"";
		let codigoCuenta="";
		let pais="";
		let letra1=IBAN.charAt(0); let letra2=IBAN.charAt(1);
		let espais1=false; let espais2=false;
		let arrayletras=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"
		,"U","V","W","X","Y","Z"];
		let arrayvalor=["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"
		,"26","27","28","29","30","31","32","33","34","35"];
		/* Array para saber la longitud de los IBAN de cada pais */
		let arraypais=["DE","AT","BE","BG","CY","HR","DK","SK","SI","ES","EE","FI","FR","GR","HU","IE"
		,"IT","LV","LT","LU","MT","NL","PL","PT","GB","CZ","RO","SE","IS","NO","CH","SM","MC","LI"];
		let arraycaract=[22,20,16,22,28,21,18,24,19,24,20,18,27,27,28,22,27,21,20,20,31,18,28,25,22,24,24,24,26,15,21,27,27,21];
		if((letra1>="A"&&letra1<="Z")&&(letra2>="A"&&letra2<="Z")) {
			i=0;
			let espais=false;
			pais=letra1+letra2;
			let sizearray=arraypais.length;
			//alert(arraypais.length+'_'+arraycaract.length+'~'+IBAN.length);
			alert(pais);
			while(!espais&&i<sizearray){
				if(arraypais[i]==pais){
					espais=true;
					longitudIBAN=arraycaract[i];
				}
				i++;
			}
			if(espais&&IBAN.length==longitudIBAN){
				pais="";
				/*i=0;
				while(!espais1&&i<35){
					if(!espais1&&letra1==arrayletras[i]){
						pais+=arrayvalor[i];
						espais1=true;
					}
					i++;
				}
				i=0;
				while(!espais2&&i<35){
					if(!espais2&&letra2==arrayletras[i]){
						pais+=arrayvalor[i];
						espais2=true;
					}
					i++;
				}*/
				if(espais1&&espais2){
					pais=""+pais+(IBAN.charAt(2))+(IBAN.charAt(3));
					/*for(i=4;i<IBAN.length;i++){
						if(IBAN.charAt(i)<"A"||IBAN.charAt(i)>"Z"){
							codigoCuenta+=IBAN.charAt(i)+"";
						}else {
							let j=0;
							while(j<arrayletras.length) {
								if(arrayletras[j]==IBAN.charAt(i)) {
									codigoCuenta+=arrayvalor[j]+"";
								}
								j++;
							}
						}
					}*/
					for(i=4;i<IBAN.length;i++) {
						codigoCuenta+=IBAN.charAt(i)+"";
					}
					codigoCuenta+=pais;
					for(i=0;i<arrayletras.length;i++) {
						codigoCuenta=codigoCuenta.replaceAll(arrayletras[i],arrayvalor[i]);
					}
					//resto3=codigoCuenta%97;
					let codigoControl=codigoCuenta%97;
					if(codigoControl==1){
						alert('Caracter de control valido valido');
					}
					
				}
			}else {
				alert('El tamaño no coincide con el pais');
			}
		}
	}
	function comprobarNombre() {
		let nombre=document.primero.nombrerazon.value;
		let nombrelong=nombre.length;
		let esnombre=true;
		let caracteresAdic="ºª-";
		let letrasAdic="áéúíóÁÉÚÍÓñÑ";
		//alert(nombrelong);
		
		if(nombrelong>=2){
			let caracter=nombre.charAt(0);
			if((caracter < "a" || caracter > "z")&&(caracter < "A" || caracter > "Z")){
				if(!letrasAdic.includes(caracter))
					esnombre=false;
			}
			letrasAdic+="0123456789.";
			let i=1;
			while(esnombre&&i<nombrelong-1){
				caracter=nombre.charAt(i);
				if((caracter<"a"||caracter>"z")&&(caracter<"A"||caracter>"Z")&&(caracter<"0"||caracter>"9")){
					if(!letrasAdic.includes(caracter)&&!caracteresAdic.includes(caracter)){
						esnombre=false;
					}
				}
				i++;
			}
			caracter=nombre.charAt(nombrelong-1);
			if((caracter < "a" || caracter > "z")&&(caracter < "A" || caracter > "Z")){
				if(!letrasAdic.includes(caracter)){
					esnombre=false;
				}
			}
			/*if(esnombre)
				alert("Es un nombre "+nombre);
			else
				alert("No es un nombre");/**/
		}else {
			esnombre=false;
		}
		return esnombre;
	}