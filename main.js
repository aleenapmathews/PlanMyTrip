function onSubmitHandler(event) {
  event.preventDefault();
  console.log(event.target);

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  window.location.href = "Home.html";
}
