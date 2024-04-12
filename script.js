// Jquery for Login form validation================================================================

$(document).ready(function () {
  $("#email").on("input", function () {
    validateEmail();
  });

  $("#password").on("input", function () {
    validatePassword();
  });

  $("#loginForm").submit(function (event) {
    event.preventDefault();
    validateAndLogin();
  });
});

function validateAndLogin() {
  if ($("#email").val() === "" || $("#password").val() === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  if (validateEmail() && validatePassword()) {
    // Successful login
    alert("Login successful");

    // Clear the form
    $("#email").val("");
    $("#password").val("");

    // Close the modal
    $("#loginmodal").modal("hide");
  }
}

function validateEmail() {
  let email = $("#email").val();

  let emailPattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  let emailError = $("#emailError");

  if (!emailPattern.test(email)) {
    emailError.text("Please enter a valid email address.");
    return false;
  } else {
    emailError.text("");
    return true;
  }
}

function validatePassword() {
  let password = $("#password").val();

  let passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

  let passwordError = $("#passwordError");

  if (!passwordPattern.test(password)) {
    passwordError.text(
      "Password must contain at least 8 characters, 1 number, 1 lowercase letter, 1 special character, and 1 uppercase letter."
    );
    return false;
  } else {
    passwordError.text("");
    return true;
  }
}

// Jquery for Registration form validation================================================================

$(document).ready(function () {
  $("#registerEmail").on("input", function () {
    validateRegisterEmail();
  });

  $("#registerPassword").on("input", function () {
    validateRegisterPassword();
  });

  $("#contactNo").on("input", function () {
    validateContactNo();
  });

  $("#gender").on("change", function () {
    validateRegisterGender();
  });

  $("#dob").on("input", function () {
    validateDOB();
  });

  $("#registerForm").submit(function (event) {
    event.preventDefault();
    validateAndSubmit();
  });
});

function validateAndSubmit() {
  let fullName = $("#registerUserName").val();
  let email = $("#registerEmail").val();
  let password = $("#registerPassword").val();
  let contactNo = $("#contactNo").val();
  let dob = $("#dob").val();
  let gender = $("#gender").val();

  if (
    fullName.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    contactNo.trim() === "" ||
    dob.trim() === "" ||
    gender === null
  ) {
    alert("Please fill in all the fields.");
    return false;
  }

  if (
    validateRegisterEmail() &&
    validateRegisterPassword() &&
    validateContactNo() &&
    validateDOB() &&
    validateRegisterGender()
  ) {
    // Successfully registered
    alert("Signup successful!");

    // Clear the form
    $("#registerUserName").val("");
    $("#registerEmail").val("");
    $("#registerPassword").val("");
    $("#contactNo").val("");
    $("#dob").val("");
    $("#gender").val("");

    // Close the modal
    $("#registermodal").modal("hide");
  }
}

function validateRegisterEmail() {
  let email = $("#registerEmail").val();
  let emailPattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  let emailError = $("#registerEmailError");

  if (!emailPattern.test(email)) {
    emailError.text("Please enter a valid email address.");
    return false;
  } else {
    emailError.text("");
    return true;
  }
}

function validateRegisterGender() {
  let gender = $("#gender").val();
  let genderPattern = /^(Male|Female|Other)$/i;
  let genderError = $("#genderError");

  if (!genderPattern.test(gender)) {
    genderError.text("Please enter a valid gender.");
    return false;
  } else {
    genderError.text("");
    return true;
  }
}

function validateRegisterPassword() {
  let password = $("#registerPassword").val();
  let passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
  let passwordError = $("#registerPasswordError");

  if (!passwordPattern.test(password)) {
    passwordError.text(
      "Password must contain at least 8 characters, 1 number, 1 lowercase letter, 1 special character and 1 uppercase letter."
    );
    return false;
  } else {
    passwordError.text("");
    return true;
  }
}

function validateContactNo() {
  let contactNo = $("#contactNo").val();
  let contactNoPattern = /^[0-9]{10}$/;
  let contactNoError = $("#contactNoError");

  if (!contactNoPattern.test(contactNo)) {
    contactNoError.text("Please enter a valid 10-digit contact number.");
    return false;
  } else {
    contactNoError.text("");
    return true;
  }
}

function validateDOB() {
  let dob = $("#dob").val();
  let dobError = $("#dobError");

  if (!dob) {
    dobError.text("Please enter your date of birth.");
    return false;
  }

  // Convert date of birth to Date object
  let dobDate = new Date(dob);

  // Get current date
  let currentDate = new Date();

  // Calculate age difference in years
  let ageDiff = currentDate.getFullYear() - dobDate.getFullYear();

  // Adjust age difference if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < dobDate.getMonth() ||
    (currentDate.getMonth() === dobDate.getMonth() &&
      currentDate.getDate() < dobDate.getDate())
  ) {
    ageDiff--;
  }

  // Check if age is at least 15 and not more than 110 years
  if (ageDiff < 15) {
    dobError.text("You must be at least 15 years old to register.");
    return false;
  } else if (ageDiff > 110) {
    dobError.text("You cannot be older than 110 years.");
    return false;
  } else {
    dobError.text("");
    return true;
  }
}

// Jquery for Booking form validation================================================================

$(document).ready(function () {
  $("#numberOfPersons").on("input", function () {
    validateNumberOfPersons();
  });

  $("#startDate").on("input", function () {
    validateStartDate();
  });

  $("#endDate").on("input", function () {
    validateEndDate();
  });

  // Attach event handler to form submission
  $("#bookingForm").submit(function (event) {
    // Prevent the default form submission
    event.preventDefault();
    // Call the function to validate and submit the form
    bookNow();
  });
});

function bookNow() {
  let whereTo = $("#whereTo").val();
  let startDate = $("#startDate").val();
  let endDate = $("#endDate").val();
  let numberOfPersons = $("#numberOfPersons").val();
  let description = $("#description").val();

  if (
    whereTo.trim() === "" ||
    startDate.trim() === "" ||
    endDate.trim() === "" ||
    numberOfPersons.trim() === "" ||
    description.trim() === ""
  ) {
    alert("Please fill in all the fields.");
    return false;
  }

  if (validateStartDate() && validateEndDate() && validateNumberOfPersons()) {
    // Successfully registered
    alert("Signup successful!");

    // Clear the form
    $("#whereTo").val("");
    $("#numberOfPersons").val("");
    $("#startDate").val("");
    $("#endDate").val("");
    $("#description").val("");
  }
}

function validateStartDate() {
  let startDateError = $("#startDateError");
  let startDate = new Date($("#startDate").val());
  let today = new Date();

  if (startDate <= today) {
    startDateError.text("Start date should be greater than today's date.");
    return false;
  } else {
    startDateError.text("");
    return true;
  }
}

function validateEndDate() {
  let endDateError = $("#endDateError");
  let startDate = new Date($("#startDate").val());
  let endDate = new Date($("#endDate").val());

  // Calculate the difference in milliseconds between start and end dates
  let timeDiff = endDate.getTime() - startDate.getTime();

  // Convert the difference to days
  let diffDays = timeDiff / (1000 * 3600 * 24);

  if (endDate <= startDate || diffDays > 30) {
    endDateError.text(
      "End date should be greater than start date and within one month."
    );
    return false;
  } else {
    endDateError.text("");
    return true;
  }
}

function validateNumberOfPersons() {
  let numberOfPersonsError = $("#numberOfPersonsError");
  let numberOfPersons = $("#numberOfPersons").val();

  if (numberOfPersons < 1) {
    numberOfPersonsError.text("Please enter at least 1 person.");
    return false;
  } else {
    numberOfPersonsError.text("");
    return true;
  }
}

// Photo Gallery slider================================================

$(document).ready(function () {
  var gallerySlider = $(".slick-slider");

  gallerySlider.slick({
    dots: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          dots: false,
        },
      },
    ],
  });

  // shadow effect on card hover
  gallerySlider.on("mouseenter", ".card", function () {
    $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.5)");
    gallerySlider.slick("slickPause"); // Pause auto-play on hover
  });

  // Remove shadow effect and resume auto-play on mouse leave
  gallerySlider.on("mouseleave", ".card", function () {
    $(this).css("box-shadow", "");
    gallerySlider.slick("slickPlay"); // Resume auto-play on mouse leave
  });
});
