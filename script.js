// DARK MODE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-mode");
};

// SCROLL
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// FORM HANDLING (NO BACKEND)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("success-msg").style.display = "block";

  // Clear form
  this.reset();
});