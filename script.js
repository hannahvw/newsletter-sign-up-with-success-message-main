const signUpBtn = document.querySelector("#sign-up-button");
const dismissBtn = document.querySelector("#dismiss-button");
const signUpPage = document.querySelector(".sign-up-container");
const successPage = document.querySelector(".success-message-container");

function subscribe() {
  // signUpPage.setAttribute("class", "hidden");
  // successPage.removeAttribute("class", "hidden");
  signUpPage.style.display = "none";
  successPage.style.display = "block";
}

function dismiss() {
  // successPage.setAttribute("class", "hidden");
  //  signUpPage.removeAttribute("class", "hidden");
  successPage.style.display = "none";
  signUpPage.style.display = "block";
}

signUpBtn.addEventListener("click", subscribe);
dismissBtn.addEventListener("click", dismiss);
