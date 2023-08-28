const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result"); 
const linkedin = document.querySelector(".fa-linkedin");
const github = document.querySelector(".fa-github");

linkedin.addEventListener("click",e=>{
  window.open("https://www.linkedin.com/in/abdullahsahin111/")
})

github.addEventListener("click",e=>{
  window.open("https://github.com/AbdullahSahin1")
})

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input",exchange);
}


function exchange(){
  const amount = Number(amountInput.value.trim());
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

  const secondOptionValue = secondOption.options[secondOption.selectedIndex]
  .textContent;


  currency.exchange(amount,firstOptionValue,secondOptionValue)
  .then((result) => {
    resultInput.value = result.toFixed(3)
  })

}