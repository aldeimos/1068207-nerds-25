var link = document.querySelector(".contacts__button");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal__close");

var form = popup.querySelector(".login-form");
var name = popup.querySelector(".login-form__input-login");
var email = popup.querySelector(".login-form__input-email");
var comment = popup.querySelector(".login-form__comment");


var isStorageSupport = true;
var storageName = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storageName) {
    login.value = storageName;
    email.focus();
  } else {
    login.focus();
  }
})

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
})

form.addEventListener("submit", function (evt) {
  if (name.value == "" || email.value == "" || comment.value == "") {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
