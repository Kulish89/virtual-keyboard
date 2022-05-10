import "./styles/style.css";
import { BUTTONS } from "./buttons.js";
const ROOT = document.querySelector(".root");
const metaKeys = ["navigation", "modifier", "editing", "meta", "whitespace"];
const language = true;

const keyboardWrapper = document.createElement("div");
const textArea = document.createElement("textarea");
textArea.classList.add("text-area");
ROOT.append(textArea);
keyboardWrapper.className = "keyboard__wrapper";
createButtons(language);

window.addEventListener("keypress", function (e) {
  e.preventDefault();
  textArea.focus();
  clickOnButton(e.code);
});

function clickOnButton(id, event) {
  let button = BUTTONS.find((btn) => {
    return btn.code == id;
  });
  if (button.keyCode > 30) {
    textArea.value += button.key[0];
  }
  if (button.keyCode === 8) {
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }

  document.getElementById(id).classList.add("active");
  setTimeout(() => {
    document.getElementById(id).classList.remove("active");
  }, 100);
}
function createButtons(language) {
  BUTTONS.forEach((btn) => {
    let newBtn = document.createElement("div");
    newBtn.classList.add("key");
    if (metaKeys.includes(btn.description)) {
      newBtn.classList.add("meta-key", btn.code);
    } else if (btn.description === "space") {
      newBtn.classList.add(btn.code);
    }
    if (+btn.keyCode >= 48 && +btn.keyCode <= 57) {
      newBtn.innerHTML = `${btn.key[1]}<br>${btn.key[0]}`;
    } else {
      if (language) {
        newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[1];
      } else if (!language) {
        newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[3];
      }
    }
    newBtn.setAttribute("id", btn.code);

    newBtn.addEventListener("click", () => {
      textArea.focus();
      clickOnButton(btn.code);
    });
    keyboardWrapper.append(newBtn);
  });
  ROOT.append(keyboardWrapper);
}
