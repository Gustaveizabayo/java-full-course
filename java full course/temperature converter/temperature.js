//temperature
const textbox = document.getElementById("texbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelisuis = document.getElementById("toCelisuis");
const result = document.getElementById("result");
let temp;


function convert(){

 if(toFahrenheit.checked){
  temp = Number(textbox.value);
  temp = temp * 9 / 5 + 32;
  result.textContent =  temp.toFixed(1) + "°F";

    


 }else if(toCelisuis.checked){
  
  temp = Number(textbox.value);
  temp = (temp -32) * (5/9);
  result.textContent =  temp.toFixed(1) + "°c";
   


 }
   else{
    result.textContent = "select a unit";
   }
}