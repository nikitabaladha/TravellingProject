// Jquery for Login form validation================================================================

$(document).ready(function () {
  $("#email").on("input", function () {
    validateEmail();
  });

  $("#password").on("input", function () {
    validatePassword();
  });
});

function validateAndLogin() {
  if (validateEmail() && validatePassword()) {
    var email = $("#email").val();
    var password = $("#password").val();

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
  var email = $("#email").val();
  var emailPattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var emailError = $("#emailError");

  if (!emailPattern.test(email)) {
    emailError.text("Please enter a valid email address.");
    return false;
  } else {
    emailError.text("");
    return true;
  }
}

function validatePassword() {
  var password = $("#password").val();
  var passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

  var passwordError = $("#passwordError");

  if (!passwordPattern.test(password)) {
    passwordError.text(
      "Password must contain at least 8 characters, 1 number, 1 lowercase letter, and 1 uppercase letter."
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
});

function validateAndSubmit() {
  if (
    validateRegisterEmail() &&
    validateRegisterPassword() &&
    validateContactNo()
  ) {
    // Successfully registered
    alert("Signup successful!");

    // Clear the form
    $("#registerUserName").val("");
    $("#registerEmail").val("");
    $("#registerPassword").val("");
    $("#contactNo").val("");

    // Close the modal
    $("#registermodal").modal("hide");
  }
}

function validateRegisterEmail() {
  var email = $("#registerEmail").val();
  var emailPattern =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var emailError = $("#registerEmailError");

  if (!emailPattern.test(email)) {
    emailError.text("Please enter a valid email address.");
    return false;
  } else {
    emailError.text("");
    return true;
  }
}

function validateRegisterPassword() {
  var password = $("#registerPassword").val();
  var passwordError = $("#registerPasswordError");
  var passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;

  if (!passwordPattern.test(password)) {
    passwordError.text(
      "Password must contain at least 8 characters, 1 number, 1 lowercase letter, and 1 uppercase letter."
    );
    return false;
  } else {
    passwordError.text("");
    return true;
  }
}

function validateContactNo() {
  var contactNo = $("#contactNo").val();
  var contactNoError = $("#contactNoError");
  var contactNoPattern = /^[0-9]{10}$/;

  if (!contactNoPattern.test(contactNo)) {
    contactNoError.text("Please enter a valid 10-digit contact number.");
    return false;
  } else {
    contactNoError.text("");
    return true;
  }
}

// Jquery for Booking form validation================================================================

$(document).ready(function () {
  function bookNow() {
    var numberOfPersons = parseInt($("#numberOfPersons").val());
    var startDate = new Date($("#startDate").val());
    var endDate = new Date($("#endDate").val());

    // Validate number of persons
    if (numberOfPersons < 1) {
      alert("Please enter at least 1 person.");
      return false;
    }

    // Validate start date
    var today = new Date();
    if (startDate <= today) {
      alert("Start date should be greater than today's date.");
      return false;
    }

    // Validate end date
    if (endDate <= startDate) {
      alert("End date should be greater than the start date.");
      return false;
    }

    alert("Booking successful!");

    $("#bookingForm").submit();

    return false;
  }

  $("#bookNowBtn").on("click", function () {
    bookNow();
  });
});

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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          dots: false,
        },
      },
      {
        breakpoint: 375, // Adjusted breakpoint for 375x668 screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px", // Adjust padding for smaller screens
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
