function checkPIN() {
  var inputPIN = document.getElementById("screen").value;
  if (pinMappings[inputPIN]) {
    window.location.href = pinMappings[inputPIN];
  } else {
    alert("Invalid PIN. Please try again.");
  }
}
