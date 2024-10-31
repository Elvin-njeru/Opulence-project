document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Validate that all fields are filled
    if (name && email && message) {
      // Display a confirmation message
      const confirmationMessage = document.getElementById("contactConfirmation");
      confirmationMessage.style.display = "block";
      confirmationMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  
      // Clear the form
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  