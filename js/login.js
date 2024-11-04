let text = document.getElementById("email");
window.onload = function () {
  text.focus();
};

const signUpBtn = document.getElementById("signout");
const userBtn = document.getElementById("navuser");
const loginForm = document.getElementById("signinnav");
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Example email and password for validation
  const validEmail = "user@example.com";
  const validPassword = "123";

  // Get the values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email and password
  if (email === validEmail && password === validPassword) {
    // Redirect to the home page

    document.getElementById("loginhome").onclick = function () {
      window.location.href = "/index.html";
      localStorage.setItem("loggedIn", "true");
    };
  } else {
    // Display error message
    document.getElementById("error-message").style.display = "block";
  }
});
