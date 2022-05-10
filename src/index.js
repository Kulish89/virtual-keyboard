import "./styles/style.css";
import { BUTTONS } from "./buttons.js";
const ROOT = document.querySelector(".root");
const metaKeys = ["navigation", "modifier", "editing", "meta", "whitespace"];

const keyboardWrapper = document.createElement("div");
const textArea = document.createElement("textarea");
textArea.classList.add("text-area");

ROOT.append(textArea);

keyboardWrapper.className = "keyboard__wrapper";
BUTTONS.forEach((btn) => {
  let newBtn = document.createElement("div");
  newBtn.classList.add("key");
  if (metaKeys.includes(btn.description)) {
    newBtn.classList.add("meta-key", btn.code);
  } else if (btn.description === "space") {
    newBtn.classList.add(btn.code);
  }
  newBtn.setAttribute("id", btn.code);
  newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[0].toUpperCase();
  keyboardWrapper.append(newBtn);
});
ROOT.append(keyboardWrapper);
window.addEventListener("keydown", function (e) {
  // e.preventDefault();
  document.querySelector(`#${e.code}`).classList.add("active");
});
window.addEventListener("keyup", function (e) {
  textArea.focus();
  document.querySelector(`#${e.code}`).classList.remove("active");
});
