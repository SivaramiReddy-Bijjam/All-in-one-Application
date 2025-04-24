"use srict"
function toggleDetails() {
    const details = document.getElementById("AdditionalDetails");
    const button = document.getElementById("toggleButton");

    if (details.style.display === "none") {
      details.style.display = "block";
      button.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      button.textContent = "Show More Details";
    }
  }