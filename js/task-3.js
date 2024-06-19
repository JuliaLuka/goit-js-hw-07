const inputUserName = document.getElementById("name-input");
const outputUser = document.getElementById("name-output");

inputUserName.addEventListener("input", handlerInput);

function handlerInput() {
  const cleanValue = inputUserName.value.trim();

  if (cleanValue) {
    outputUser.textContent = cleanValue;
  } else {
    outputUser.textContent = "Anonymous";
  }
}
