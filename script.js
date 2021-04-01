
console.log('hoi')

// var knop1 = document.querySelector('ol button:first-of-type');
// var knop2 = document.querySelector('ol button:nth-of-type(2)');
// var knop3 = document.querySelector('ol button:nth-of-type(3)');
// var afbeelding = document.querySelector('#iteratie')


// function iteratie1(){
//     afbeelding.src = "img/it1.svg";
//     console.log('hoi')
// };

// function iteratie2(){
//     afbeelding.src = "img/it2.svg";
// };

// function iteratie3(){
//     afbeelding.src = "img/it3.svg";
// };

// knop1.addEventListener("click", iteratie1)
// knop2.addEventListener("click", iteratie2)
// knop3.addEventListener("click", iteratie3)

var tr1 = document.querySelector('table tr:nth-of-type(1)')
var tr2 = document.querySelector('table tr:nth-of-type(2)')
var tr3 = document.querySelector('table tr:nth-of-type(3)')

var tr1Content = document.querySelector('table tr:nth-of-type(1) td:nth-of-type(2)')
var tr2Content = document.querySelector('table tr:nth-of-type(1) td:nth-of-type(3)')
var tr3Content = document.querySelector('table tr:nth-of-type(1) td:nth-of-type(4)')


function showContent(){
 
    tr2Content.classList.remove('trcontent')
    tr3Content.classList.remove('trcontent')
    tr1Content.classList.remove('trcontent')
    tr1Content.classList.add('trcontent');
  
}

function showContent2(){
 
    tr2Content.classList.remove('trcontent')
    tr3Content.classList.remove('trcontent')
    tr1Content.classList.remove('trcontent')
    tr2Content.classList.add('trcontent');
  
}

function showContent3(){
 
    tr2Content.classList.remove('trcontent')
    tr3Content.classList.remove('trcontent')
    tr1Content.classList.remove('trcontent')
    tr3Content.classList.add('trcontent');
  
}
tr1.addEventListener('click', showContent)
tr2.addEventListener('click', showContent2)
tr3.addEventListener('click', showContent3)
