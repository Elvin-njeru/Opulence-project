document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
  
    // Check if all fields are filled
    if (name && email && phone && date && time && guests) {
      // Display a confirmation message
      document.getElementById("reservationConfirmation").style.display = "block";
      document.getElementById("reservationConfirmation").textContent = 
        `Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guest(s).`;
  
      // Clear the form
      document.getElementById("reservationForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  