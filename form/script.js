const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Optional: Array to store error messages
const errorMessages = [];

// Function to validate email format (using basic regular expression)
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Clear any previous error messages
  errorMessages.length = 0; // Reset the error array

  // Validate name (example: check for empty string)
  if (nameInput.value.trim() === "") {
    errorMessages.push("Please enter your name.");
  }

  // Validate email format
  if (!isValidEmail(emailInput.value)) {
    errorMessages.push("Please enter a valid email address.");
  }

  // Validate password length (example: minimum length of 8 characters)
  if (passwordInput.value.length < 8) {
    errorMessages.push("Password must be at least 8 characters long.");
  }

  // Handle potential errors
  if (errorMessages.length > 0) {
    // Display error messages to the user (example: using alert or DOM manipulation)
    alert(errorMessages.join("\n"));
    return; // Prevent form submission if there are errors
  }

  // If no errors, proceed with form submission
  // (Implement your logic for sending data, e.g., using Fetch API)
  console.log("Form submitted successfully!");
  // Handle successful submission (e.g., redirect to a confirmation page)
});
