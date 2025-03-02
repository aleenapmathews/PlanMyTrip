function onSubmitHandler(event) {
  event.preventDefault();
  console.log(event.target);

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  window.location.href = "Home.html";
}

function onSubmitHandlerReg(event) {
  event.preventDefault();
  console.log(event.target);

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const confirmpassword = document.getElementById("confirmpassword").value;

  if (password != confirmpassword) {
    alert("password don't match!.try again");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);

  window.location.href = "login.html";
}
