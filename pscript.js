
var cat1 = document.querySelector('#kolom1 li:nth-of-type(1)');
var cat2 = document.querySelector('#kolom1 li:nth-of-type(2)');
var cat3 = document.querySelector('#kolom1 li:nth-of-type(3)');
var cat4 = document.querySelector('#kolom1 li:nth-of-type(4)');
var knoppen = [cat1,cat2,cat3,cat4];
var content1 = document.querySelector('.kolom2')
var li1 = document.querySelector('.kolom2 ul:nth-of-type(1) ')
var li2 = document.querySelector('.kolom2 ul:nth-of-type(2) ')
var li3 = document.querySelector('.kolom2 ul:nth-of-type(3) ')
var li4 = document.querySelector('.kolom2 ul:nth-of-type(4) ')

var lijsten = [li1,li2,li3,li4]
console.log(content1)

function openMenu (){
   lijsten[0].classList.remove('verschijn')
   lijsten[1].classList.remove('verschijn')
   lijsten[2].classList.remove('verschijn')
   lijsten[3].classList.remove('verschijn')
   knoppen[0].classList.remove('kleur')
   knoppen[1].classList.remove('kleur')
   knoppen[2].classList.remove('kleur')
   knoppen[3].classList.remove('kleur')

   content1.classList.add('verschijn');
   li1.classList.add('verschijn');
   this.classList.add('kleur')

}

function openMenu2 (){ lijsten[0].classList.remove('verschijn')
   lijsten[0].classList.remove('verschijn')
   lijsten[1].classList.remove('verschijn')
   lijsten[2].classList.remove('verschijn')
   lijsten[3].classList.remove('verschijn')
   knoppen[0].classList.remove('kleur')
   knoppen[1].classList.remove('kleur')
   knoppen[2].classList.remove('kleur')
   knoppen[3].classList.remove('kleur')
   content1.classList.add('verschijn');
   li2.classList.add('verschijn');
   this.classList.add('kleur')


}

function openMenu3 (){
   lijsten[0].classList.remove('verschijn')
   lijsten[1].classList.remove('verschijn')
   lijsten[2].classList.remove('verschijn')
   lijsten[3].classList.remove('verschijn')
   knoppen[0].classList.remove('kleur')
   knoppen[1].classList.remove('kleur')
   knoppen[2].classList.remove('kleur')
   knoppen[3].classList.remove('kleur')
   content1.classList.add('verschijn');
   li3.classList.add('verschijn');
   this.classList.add('kleur')


}

function openMenu4 (){
   lijsten[0].classList.remove('verschijn')
   lijsten[1].classList.remove('verschijn')
   lijsten[2].classList.remove('verschijn')
   lijsten[3].classList.remove('verschijn')
   knoppen[0].classList.remove('kleur')
   knoppen[1].classList.remove('kleur')
   knoppen[2].classList.remove('kleur')
   knoppen[3].classList.remove('kleur')
   content1.classList.add('verschijn');
   li4.classList.add('verschijn');
   this.classList.add('kleur')


}
console.log(li1)
knoppen[0].addEventListener('click', openMenu)
knoppen[1].addEventListener('click', openMenu2)
knoppen[2].addEventListener('click', openMenu3)
knoppen[3].addEventListener('click', openMenu4)

