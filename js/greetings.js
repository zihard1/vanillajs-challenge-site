const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const ADD_EVENT = "add";
const REMOVE_EVENT = "remove";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form #login-div input");
const greeting = document.querySelector("#greeting");
const btnLogout = document.querySelector("#btnLogOut");
const loginDiv = document.getElementById("login-div");
const logoutDiv = document.getElementById("logout-div");

let username = loginInput.value;
const localUsername = localStorage.getItem(USERNAME_KEY);

if (localUsername !== null) {
    greeting.innerText = `Hello ${localUsername}`;
    loginDiv.classList.add("hidden");
    logoutDiv.classList.remove("hidden");
}

function onLoginSubmit(event) {
    event.preventDefault();

    username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`;
    
    btnToggle();
}

function onLogoutClick(event) {
    event.preventDefault();

    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";

    btnToggle();
}

function btnToggle() {
    loginDiv.classList.toggle("hidden");
    logoutDiv.classList.toggle("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
btnLogout.addEventListener("click", onLogoutClick);