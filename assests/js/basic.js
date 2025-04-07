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
});

