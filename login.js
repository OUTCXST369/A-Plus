// Get references to the login and register forms and tab buttons
const loginForm = document.getElementById ("login-form");
const registerForm = document.getElementById ("register-form");
const loginTab = document.getElementById ("loginTab");
const registerTab = document.getElementById ("registerTab");

// Add event listeners to the tab buttons
loginTab.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginTab.classList.add("active-tab");
    registerTab.classList.remove("active-tab");
});

registerTab.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    loginTab.classList.remove("active-tab");
    registerTab.classList.add("active-tab");
});

// Initially, show the login form and make the login tab active
loginForm.style.display = "block";
loginTab.classList.add("active-tab");
