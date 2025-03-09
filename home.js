function onHomePageLoad() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

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

// Ensure logout functionality only runs if logoutLink exists
let logoutLink = document.getElementById("logoutLink");
if (logoutLink) {
  logoutLink.addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    onHomePageLoad(); // Update UI after logout
  });
}

// Fix for Intersection Observer to ensure sections are displayed
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".about_box, .plan, .package, .faq");
  hiddenElements.forEach((el) => observer.observe(el));
});
