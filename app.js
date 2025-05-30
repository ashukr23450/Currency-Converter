const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies" ;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select") ;
const toCurr = document.querySelector(".to select") ;
let msg = document.querySelector(".msg");



for (let select of dropdowns) {
    for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);

    
    // Always select country applying
        if (select.name==="from"  && currCode === "USD" ){
            newOption.selected = " selected"
        }else if (select.name==="To"  && currCode === "INR" ){
            newOption.selected = " selected"
        }
    }
    select.addEventListener("change" , (evt)=>{
        updateFlag(evt.target)
    })
}


const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1){
        amtVal = 1 ;
        amtVal.value = "1";
    }
    

    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json` ;
    let response = await fetch (URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtVal*rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} `
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc ;
    
};

btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault();
    updateExchangeRate()
    
});

window.addEventListener("load" , ()=>{
    updateExchangeRate();
})