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

window.addEventListener("keydown", function (e) {
  // e.preventDefault();
  textArea.focus();

  clickOnButton(e.code, e);
});

function clickOnButton(id, event) {
  if (event.type === "click") {
    let button = document.getElementById(id);
    button.classList.add("active");
    setTimeout(() => {
      button.classList.remove("active");
    }, 100);
    if (id > 30 && id !== 8) {
      if (!event.shiftKey) {
        textArea.value += button.lastChild.textContent.toLowerCase();
      } else {
        textArea.value += button.firstChild.textContent;
      }
    }
    if (id === 8) {
      textArea.value = textArea.value.substring(0, textArea.value.length - 1);
    }
  } else {
    let button = BUTTONS.find((btn) => {
      return btn.code == id;
    });
    let btnInDOM = document.getElementById(button.keyCode);
    btnInDOM.classList.add("active");
    setTimeout(() => {
      btnInDOM.classList.remove("active");
    }, 100);
  }
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
    newBtn.setAttribute("id", btn.keyCode);

    newBtn.addEventListener("click", (e) => {
      textArea.focus();
      clickOnButton(btn.keyCode, e);
    });
    keyboardWrapper.append(newBtn);
  });
  ROOT.append(keyboardWrapper);
}
