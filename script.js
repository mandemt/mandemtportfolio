


var knop1 = document.querySelector('ol button:first-of-type');
var knop2 = document.querySelector('ol button:nth-of-type(2)');
var knop3 = document.querySelector('ol button:nth-of-type(3)');
var afbeelding = document.querySelector('#iteratie')


function iteratie1(){
    afbeelding.src = "img/it1.svg";
    console.log('hoi')
};

function iteratie2(){
    afbeelding.src = "img/it2.svg";
};

function iteratie3(){
    afbeelding.src = "img/it3.svg";
};

knop1.addEventListener("click", iteratie1)
knop2.addEventListener("click", iteratie2)
knop3.addEventListener("click", iteratie3)

