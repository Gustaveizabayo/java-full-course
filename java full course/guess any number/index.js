//Random number

const mybutton =document.getElementById("mybutton");
  const mylabel=document.getElementById("mylabel");

const min = 1;
const  max =6;
let randomNum;

mybutton.onclick = function(){
  randomNum = Math.floor(Math.random * max) + min;
  mylabel.textContent = randomNum;

}
 