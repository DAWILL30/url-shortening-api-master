// Selecting elements
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const links = [
  document.getElementById("link-1"),
  document.getElementById("link-2"),
  document.getElementById("link-3"),
];

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

// Event listeners
btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

// Toggle navigation menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Validate URL
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

// Form submission handling
function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    displayError("Please enter a link");
    showLinks();
  } else if (!isValidHttpUrl(input.value)) {
    displayError("Please enter a valid URL");
    showLinks();
  } else {
    clearError();
    showLinks();
  }
}

// Display error message
function displayError(message) {
  errMsg.innerHTML = message;
  input.classList.add("border-red");
}

// Clear error message and styles
function clearError() {
  errMsg.innerHTML = "";
  input.classList.remove("border-red");
}

// Show links
function showLinks() {
  links.forEach((link) => {
    link.classList.remove("hidden");
    link.classList.add("flex");
  });
}
