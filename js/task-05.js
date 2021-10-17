const refs = {
    inputName : document.querySelector("#name-input"),
    outputName :document.querySelector("#name-output"),
};
 refs.inputName.addEventListener('input', handleInputChange);

 function handleInputChange (e) {
    if (e.currentTarget.value.length !== 0){
        
   
     refs.outputName.textContent = e.currentTarget.value;
    } else {
 refs.outputName.textContent = "Anonymous";

    }
 };