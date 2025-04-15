// Get references to DOM elements
const toggleBtn = document.getElementById("toggleBtn")
const infoSection = document.getElementById("infoSection")

// Initialize the state
let isVisible = false

// Function to update the DOM based on current state
function updateVisibility() {
  if (isVisible) {
    infoSection.classList.remove("hidden")
  } else {
    infoSection.classList.add("hidden")
  }
}

// Event listener for toggle button
toggleBtn.addEventListener("click", () => {
  // Update the state by toggling the boolean value
  isVisible = !isVisible

  // Update the DOM to reflect the current state
  updateVisibility()
})