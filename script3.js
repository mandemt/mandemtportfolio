
var foto = document.querySelector('body img');

var volgendeKnop = document.querySelector('body button:nth-of-type(2)');

var imgArray = [
    'p1.svg','p2.svg','p3.svg','p4.svg'
 ]
console.log('array geladen')

console.log('ho')

var huidigFotoNr = 0;

function volgende(){

    foto.src = 'img/vid/' + imgArray[huidigFotoNr];
    console.log(volgende)
    huidigFotoNr = huidigFotoNr + 1;
}
console.log('na functie')

volgendeKnop.addEventListener('click', volgende);