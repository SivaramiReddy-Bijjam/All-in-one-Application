"use strict"
import {apptitle} from "./app.js";
const title =document.getElementById("title");
title.textContent = "I Am Learning About Javascript Language".toUpperCase();
// title.textContent = "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను";
// title.textContent = "नेनु जावास्क्रिप्ट नेचुकुंटुन्नानु "
document.title ="All in one application";

const titles = [
    "నేను జావాస్క్రిప్ట్ నేర్చుకుంటున్నాను", 
    "नेनु जावास्क्रिप्ट नेचुकुंटुन्नानु ",
];

let count = 0;

const intervalId = setInterval(function(){
    if(count<titles.length){
    title.textContent = titles[count];
    count++;
    }else{
        clearInterval(intervalId);
        window.location.href = "Home.html";
    }
}, 1000);