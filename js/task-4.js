const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerLoginInfo);

function handlerLoginInfo(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const cleanEmail = email.value.trim();
  const cleanPassword = password.value.trim();

  if (cleanEmail === "" || cleanPassword === "") {
    return alert("Email field must be filled in");
  }

  const loginInfo = {
    email: cleanEmail,
    password: cleanPassword,
  };
  console.log(loginInfo);

  form.reset();
}
