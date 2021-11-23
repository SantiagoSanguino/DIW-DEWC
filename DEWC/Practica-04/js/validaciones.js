
function lectura(evento) {
	let eventos=evento||window.event;
	let enviar=false;
	return enviar;
}
function media(...numbers) {
	var cont=0;
	var media=0;
	for(var i=0;i<numbers.length;i++){
		media+=numbers[i];
		cont++;
	}
	return [media,cont];
	/*var media=num1+num2;
	if(media!=null){
		for(var i=0;i<numbers.length;i++){
			media+=numbers[i];
			cont++;
		}
		media=(media/cont);
	}else {
		media=0
	}
	return media;*/
}
function mostrarMedia() {
	var mediarray=new Array();
	mediarray=media(2,6);
	var media_d=0;
	if(mediarray[1]!=0){
		media_d=(mediarray[0]/mediarray[1]);
	}
	document.formulario.resultado.value=media_d;
	
}
function maximos(num1,num2,...numbers) {
	var max1=num1;
	var max2=num2;
	if(max1<max2) {
		max2=num1;
		max1=num2;
	}
	for(var i=0;i<numbers.length;i++) {
		if(max1<numbers[i]) {
			max2=max1;
			max1=numbers[i];
		}else if(max2<numbers[i]) {
			max2=numbers[i];
		}
	}
	return [max1,max2];
	
}
function mostrarMaximos() {
	var miarray=new Array();
	miarray=maximos(5,6,7,8,9,10);
	document.formulario.max1.value=miarray[0];
	document.formulario.max2.value=miarray[1];
}