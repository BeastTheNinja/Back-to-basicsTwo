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


  let myNameTest = false; // Initializes a variable to test the name
  let myEmailTest = false; // Initializes a variable to test the email

    //vudere navn
    // find ud af om der er indtagt noget i input felterne
    if (myName.length > 1 && myName.length < 5){
        myNameTest = true; // Sets the name test to true if the name length is between 1 and 5 characters
        }


    //vudere email
    // regex til at vurdere email
    if( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gim.test(myEmail)){
        myEmailTest = true; // Sets the email test to true if the email matches the regex pattern 
        }
    
    if (myNameTest && myEmailTest){
        alert("Form submitted successfully!"); // Alerts the user that the form has been submitted successfully
    }
    else {
        alert("Please enter valid name and email.");
    }
});

