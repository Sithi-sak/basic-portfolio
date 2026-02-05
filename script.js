function showSection(section) {
  // Hide all sections
  var sections = document.querySelectorAll(".content-section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });

  // Show the selected section
  var activeSection = document.getElementById(section);
  activeSection.style.display = "block";

  window.scrollTo(0, 0);

  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    if (btn.textContent.trim().toLowerCase() === section) {
      btn.classList.add("active");
      btn.classList.remove("inactive");
    } else {
      btn.classList.remove("active");
      btn.classList.add("inactive");
    }
  });

  if (section == "about") {
    addCardHoverEffet();
  }
}

function addCardHoverEffet() {
  document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".nav-btn[onclick=\"showSection('work')\"]")
    .classList.add("active");
  document
    .querySelector(".nav-btn[onclick=\"showSection('about')\"]")
    .classList.add("inactive");

  addCardHoverEffet();
});
