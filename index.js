
const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i"
 ,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];``
let length=16
password=""
let emptyBtnOne=document.getElementById("empty-btn-1")


function generatePassword(){
  for(i=0; i<characters.length; i++){
    let password=Math.floor(Math.random()*characters.length) ;
    emptyBtnOne.textContent=characters[password];
  }
  }
