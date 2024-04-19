const signUpBtn = document.querySelector("#sign-up-button");
const dismissBtn = document.querySelector("#dismiss-button");
const signUpPage = document.querySelector(".sign-up-container");
const successPage = document.querySelector(".success-message-container");
const userEmail = document.querySelector("#email");
const confirmEmail = document.querySelector("#user-email");
const errorMsg = document.querySelector("#error-msg");

function subscribe(event) {
  event.preventDefault();

  if (userEmail.value.includes("@")) {
    confirmEmail.textContent = userEmail.value;
    errorMsg.style.display = "none";
    userEmail.value = "";
    userEmail.removeAttribute("class", "error");
    //signUpPage.setAttribute("class", "hidden");
    //successPage.removeAttribute("class", "hidden");
    signUpPage.style.display = "none";
    successPage.style.display = "grid";
  } else {
    errorMsg.style.display = "grid";
    userEmail.setAttribute("class", "error");
  }
}

function dismiss() {
  //successPage.setAttribute("class", "hidden");
  // signUpPage.removeAttribute("class", "hidden");
  successPage.style.display = "none";
  signUpPage.style.display = "grid";
}

signUpBtn.addEventListener("click", subscribe);
dismissBtn.addEventListener("click", dismiss);
