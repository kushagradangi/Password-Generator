const lengthDisplay=document.querySelector("[data-lengthNumber]");
const inputSlider=document.querySelector("[data-lenngthSlider]");
const indicator= document.querySelector("[data-Indicator]");


defaultPasswordLength=10;

handleSlider();

function handleSlider(){
    lengthDisplay.innerText= defaultPasswordLength;
    inputSlider.value= defaultPasswordLength;

}

function setIndicato(color){
    indicator.style.backgroundColor= color;
}

function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}





