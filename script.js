// This script runs when the page loads
window.onload = function () {
  console.log("Page loaded successfully!");
  alert("Welcome to my website!");
};

// This function changes the text of a paragraph when called
function sayHello() {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = "Hello, JavaScript is working!";
  } else {
    console.error("Element with ID 'message' not found.");
  }
}
