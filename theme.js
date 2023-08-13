const modeToggle = document.getElementById("mode-toggle");
const modeIcon = document.getElementById("mode-icon");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("my-light-mode");
  body.classList.toggle("my-dark-mode");

  if (body.classList.contains("my-dark-mode")) {
    modeIcon.src = "Images/sun.svg";
  } else {
    modeIcon.src = "Images/moon.svg";
  }
});
// Change the default theme to dark
body.classList.add("my-dark-mode");
modeIcon.src = "Images/sun.svg";

modeToggle.addEventListener("click", toggleTheme);