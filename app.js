function validateEmail(email) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function validateTurkishPhoneNumber(phoneNumber) {
  const phoneRegex = /^(05)([0-9]{2})[0-9]{3}[0-9]{4}$/;
  return phoneRegex.test(phoneNumber);
}

// function to handle the form submission
function handleFormSubmit(event) {
  event.preventDefault(); 

  // get the email and phone number values from the form
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;

  // validate email and phone number
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!validateTurkishPhoneNumber(phoneNumber)) {
    alert("Please enter a valid Turkish phone number.");
    return false;
  }

    // if both validations pass
if (validateEmail(email) && validateTurkishPhoneNumber(phoneNumber)) {
  window.location.href = 'submit.html';
} else {
  // if validations fail, display error message
  alert("Please enter valid information.");
}

  return true;
}

document.getElementById("appointment-form").addEventListener("submit", handleFormSubmit);
