const lengthDisplay=document.querySelector("[data-lengthNumber]");
const inputSlider=document.querySelector("[data-lenngthSlider]");
const indicator= document.querySelector("[data-Indicator]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



defaultPasswordLength=10;

handleSlider();

function handleSlider(){
    lengthDisplay.innerText= defaultPasswordLength;
    inputSlider.value= defaultPasswordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor= color;
}

function getRandomInteger(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbol(){
    const randNum = getRandomInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");
    }
    else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) && 
        passwordLength >=6
    ){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }

}



