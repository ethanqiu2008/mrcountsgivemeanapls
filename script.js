// Toggle the "Read More" text in the biography section
document.getElementById("read-more-btn").addEventListener("click", function () {
  const moreText = document.getElementById("more-text");
  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    this.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    this.textContent = "Read More";
  }
});

// Mobile Navigation Toggle
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const navLinks = document.querySelector(".nav-links");

mobileMenuIcon.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
