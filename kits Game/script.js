const incrementby = document.getElementById("incrementby");
const decrementby = document.getElementById("decrementby");
const incrementby5 = document.getElementById("incrementby5");
const decrementby5 = document.getElementById("decrementby5");
const divisibleby5 = document.getElementById("divisibleby5");
const multiplyby5 = document.getElementById("multiplyby5");
const Reset = document.getElementById("Reset");

const getresult = document.getElementById("result");
console.log(incrementby);
let counter =0 ;
incrementby.addEventListener("click", function(event){
    console.log(event);
    console.log("clicking");
    counter = counter+1;
    getresult.textContent = counter;
});
  decrementby.addEventListener("click", function (){
    if(counter>0){
    counter = counter-1;
    }
    getresult.textContent = counter;
});
incrementby5.addEventListener("click", function(){
    counter = counter+5;
    getresult.textContent = counter;
});
decrementby5.addEventListener("click", function (){
    if(counter>4){
    counter = counter-5;
    }
    getresult.textContent = counter;
});
divisibleby5.addEventListener("click", function (){
    if(counter>4){
    counter = counter/5;
    }
    getresult.textContent = counter;
});
multiplyby5.addEventListener("click", function (){
    counter = counter*5;
    getresult.textContent = counter;
});
 Reset.addEventListener("click", function (){
    counter = 0;
    getresult.textContent = counter;
});
console.log("IAm Doing My Work")