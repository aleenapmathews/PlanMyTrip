function onHomePageLoad() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  console.log(username,password);

  let isLoggedIn = false;
  if (username != null && password != null) {
    isLoggedIn = true;
  }
  if (isLoggedIn == false) {
    window.location.href = "login.html";
  }
  else{
      document.getElementById("planLink").style.display="block";
      document.getElementById("aboutLink").style.display="block";
  }
}
