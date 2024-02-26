function bookNow() {
  var whereTo = document.getElementById("whereTo").value;
  var numberOfPersons = document.getElementById("numberOfPersons").value;
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var description = document.getElementById("description").value;

  if (whereTo && numberOfPersons && startDate && endDate && description) {
    // Booking successful
    alert("Booking successful!");

    // Clear the form after 2 seconds
    setTimeout(function () {
      document.getElementById("bookingForm").reset();
    }, 2000);
  } else {
    // Some fields are not filled
    alert("Please fill in all the fields.");
  }

  // Return false to prevent the default form submission
  return false;
}
