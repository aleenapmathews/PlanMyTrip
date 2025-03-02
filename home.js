function onHomePageLoad() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  console.log(username, password);

  //   let isLoggedIn = false;
  //   if (username != null && password != null) {
  //     isLoggedIn = true;
  //   }
  //   if (isLoggedIn == false) {
  //     // window.location.href = "login.html";
  //   }
  //   else{
  //       document.getElementById("planLink").style.display="block";
  //       document.getElementById("aboutLink").style.display="block";
  //       document.getElementById("logoutLink").style.display="block";

  //   }
  // }

  let isLoggedIn = username !== null && password !== null;

  if (isLoggedIn) {
    document.getElementById("planLink").style.display = "block";
    document.getElementById("logoutLink").style.display = "block";
    document.getElementById("plan").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
  } else {
    document.getElementById("planLink").style.display = "none";
    document.getElementById("logoutLink").style.display = "none";
    document.getElementById("plan").style.display = "none";
  }
}

// Logout Function
document.getElementById("logoutLink").addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  onHomePageLoad(); // Update UI after logout
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".about_box, .plan, .package, .faq");
hiddenElements.forEach((el) => observer.observe(el));



