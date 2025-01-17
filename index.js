const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const indicator= document.querySelector("[data-Indicator]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const copyMsg = document.querySelector("[data-copyMsg]");
const copyBtn = document.querySelector("[data-copy]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

let passwordLength = 10;
let checkCount = 0;

handleSlider();

function handleSlider(){
    inputSlider.value= passwordLength;
    lengthDisplay.innerText= passwordLength;
}

inputSlider.addEventListener('input', (e)=>{
    passwordLength = e.target.value;
    handleSlider();
});

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

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    //to make copy wala span visible
    copyMsg.classList.add("active");   

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    }, 2000);

}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition 
    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change',handleCheckBoxChange);
});

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
}); 

 








