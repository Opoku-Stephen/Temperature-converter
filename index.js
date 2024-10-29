const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius= document.getElementById("toCelcius");
const results = document.getElementById("results");

let convertion;

function answer(){


    if(toFahrenheit.checked){
    convertion = Number(textBox.value);
convertion = (convertion * 9/5) + 32;
results.textContent = convertion.toFixed(1) + "°F";
}


else if(toCelcius.checked){
    convertion = Number(textBox.value);
convertion = (convertion - 32) * (9/5);
results.textContent = convertion + "°C";
}

else{
    results.textContent =  `select a unit` ; 
}

}