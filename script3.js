console.log('slider Visual Interface Design')
var imgArray = [
    'p1.svg','p2.png','p3.svg','p4.svg'];

var foto = document.querySelector('body img');

var volgendeKnop = document.querySelector('body button:nth-of-type(2)');
var vorigeKnip = document.querySelector('body button:first-of-type')




var fotoNr = 0;

function volgende(){
	fotoNr = fotoNr + 1
	console.log('volgende' + fotoNr)
    
  if(fotoNr > 3){
  	fotoNr = 3
  }
  else{
  	foto.src = 'img/vid/' + imgArray[fotoNr];
  }
}

function vorige(){
		fotoNr = fotoNr - 1
	console.log('volgende' + fotoNr)
    
  if(fotoNr < 0 ){
  	fotoNr = 0
  }
  else{
  	foto.src = 'img/vid/' + imgArray[fotoNr];
  }
}
console.log('na functie')

volgendeKnop.addEventListener('click', volgende);
vorigeKnip.addEventListener('click', vorige);