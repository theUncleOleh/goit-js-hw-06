const input = document.querySelector("#font-size-control");
console.log(input);
const textElement = document.querySelector("#text");
console.log(textElement);

input.addEventListener('input', () => {
    textElement.style.fontSize = `${input.value}px`;
})