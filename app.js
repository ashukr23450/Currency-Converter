const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json" ;

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    console.log(select)

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

const updateFlag = (element) =>{
    let currCode = element.value;
    console.log(currCode)
    let countryCode = countryList[currCode];
    console.log(countryCode)
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` ;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc ;

}
