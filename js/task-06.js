const input = document.querySelector("#validation-input");
const atributeInput = input.getAttribute("data-length");
console.log(atributeInput);

input.addEventListener('blur', (e) => {
    
   
if(e.currentTarget.value.length === Number(atributeInput)){
 e.currentTarget.classList.add('valid');
 e.currentTarget.classList.remove('invalid');
} else {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.add('invalid'); 
}
});












