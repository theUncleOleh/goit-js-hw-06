const form = document.querySelector(".login-form");
console.log(form);



form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (event){
    event.preventDefault();

 const formElements = {
email : event.currentTarget.elements.email.value,
password : event.currentTarget.elements.password.value,
    }
    if (formElements.email === "" || formElements.password === "") {
        return console.log(alert("Please fill in all the fields!")) 
      } 
        console.log(formElements);
        
    event.currentTarget.reset();

    
}



