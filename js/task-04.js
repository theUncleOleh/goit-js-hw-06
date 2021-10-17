
const counter = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
// console.log(decrementBtn);
let counterValue = 0;
decrementBtn.addEventListener('click', () => {
    console.log("click");
    counterValue -= 1;
    return counter.textContent = counterValue;

});
incrementBtn.addEventListener('click', ()=> {
    console.log("click");
     counterValue += 1 ;
     return counter.textContent = counterValue;

} )
