var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");	
var storage = localStorage.getItem("login");
link.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
});
form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }   else {
			localStorage.setItem("login", login.value);
    }
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
       if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
        }
    }
});