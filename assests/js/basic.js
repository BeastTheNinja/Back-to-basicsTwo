// JS here
const mySubmitButton = document.getElementById("submitButton")
// fejlfinding
// console.log(mySubmitButton);

mySubmitButton.addEventListener("click",(e)=> {
  // console.log(e); // Logs the event object to the console

    e.preventDefault(); // Prevents the default action of the button, which is to submit the form

    // console.log("You clicked the button!"); // Logs a message to the console when the button is clicked
    // find værdier i input felterne
    const myName = document.getElementById("name").value; // Gets the value of the input field with id "name"
    const myEmail = document.getElementById("email").value; // Gets the value of the input field with id "email"
    console.log(`Name: ${myName}, Email: ${myEmail}`);
    // Logs the name and email to the console


    let myError = document.getElementById("errorMessage")
    myError.innerHTML = ""; // Clears the error message

    // find ud af om der er indtagt noget i input felterne
    if (myName.length> 1 && myName.length < 5){
        // der er ingen fejl i navn{
        //alt er godt
        console.log("Name is valid"); 
        }
        else{
        // der er en fejl i navn
        console.log("Name is NOT valid");
        }
     //vudere navn
});

