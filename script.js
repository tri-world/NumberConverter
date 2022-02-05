"use strict"

const selectFrom = document.getElementById("from");
const selectTo  =document.getElementById("to");
const swapBtn = document.getElementById("swap");
const input =document.getElementById("input");
const output =document.getElementById("output");
const convertBtn = document.getElementById("convert");

// swap Button function
swapBtn.addEventListener("click",()=>{
    let temp = selectFrom.value;
    let temp2 =input.value;

    selectFrom.value= selectTo.value;
    selectTo.value = temp;
   
    input.value= output.value;
    output.value=temp2;
})

input.addEventListener('click',()=>{
    output.value="";
})


// function decimal to Binary

function decToBinary(n)
{
    let binaryNum ="";
    let i = 0;
    while (n > 0) {
        binaryNum  += n % 2;
        n = Math.floor(n / 2);
        i++;
    }
   return(binaryNum);   
}
// Hexa-decimal to Binary function 
var hex2bin = data => data.split('').map(i => 
    parseInt(i, 16).toString(2).padStart(4, '0')).join('');

// Octal to Binary function
function OctToBin(octnum)
{
    let i = 0;
   
    let binary = "";
      
    while (i<octnum.length) {
          
        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            document.write( "<br>Invalid Octal Digit "+ octnum[i]);
            break;
        }
        i++;
    }
   
    return binary;
}   


// choice value  0 for -decimal
            //   1 for -Hexadecimal
            //   2 for -Octal
            //   3 for -Binary
    
//convert function
convertBtn.addEventListener("click",()=>{
    // output.style.backgroundColor="";
    let value=(input.value);
    if(value=="") return;
    value=parseInt(input.value);
    console.log(typeof value);
    let fromValue = Number(selectFrom.value);
    let toValue = Number(selectTo.value);
 
    // to binary conditions
    if(fromValue===0 && toValue===3){
        output.value = decToBinary(value);
    }  
    else if(fromValue===1 && toValue===3){
        output.value=hex2bin(input.value);
    }
    else if(fromValue===2 && toValue===3){
        output.value=OctToBin(input.value);
    }
    // if both the choices are same condition
    else if(fromValue===toValue){
        output.value="select different choice";
        // output.style.backgroundColor="red";
    }
    // to decimal condition
    else if(fromValue===3 && toValue===0){
        output.value= parseInt(input.value,2);
    }
    else if(fromValue===1 && toValue===0){
        output.value =parseInt(input.value,16);
    }
    else if(fromValue===2 && toValue===0){
        output.value=parseInt(input.value,8);
    }
    // to hexadecimal conditions
    else if(fromValue===2 && toValue===1){
        // output.value=parseInt(input.value, 8).toString(16);
        output.value = parseInt(input.value, 8).toString(16).toUpperCase();
  
    }
    else if(fromValue===3 && toValue===1){
        output.value=parseInt(input.value, 2).toString(16).toUpperCase();
    }
    else if(fromValue===0 && toValue===1){
        output.value=parseInt(input.value).toString(16).toUpperCase();
    }
    // // to octal conditions
    else if(fromValue===0 && toValue===2){
        output.value=parseInt(input.value).toString(8);
    }
    else if(fromValue===1 && toValue===2){
        output.value=parseInt(input.value,16).toString(8);
    }
    else if(fromValue===3 && toValue===2){
        output.value=parseInt(input.value,2).toString(8);
    }
 
})





