import "./styles/style.css";
import { BUTTONS } from "./buttons.js";
const ROOT = document.querySelector(".root");

const keyboardWrapper = document.createElement("div");

keyboardWrapper.className = "keyboard__wrapper";
BUTTONS.forEach((btn) => {
  let newBtn = document.createElement("div");
  newBtn.classList.add("key");
  if (
    btn.description === "navigation" ||
    btn.description === "modifier" ||
    btn.description === "editing" ||
    btn.description === "meta" ||
    btn.description === "whitespace"
  ) {
    newBtn.classList.add("meta-key", btn.code);
  } else if (btn.description === "space") {
    newBtn.classList.add(btn.code);
  }
  newBtn.setAttribute("id", btn.keyCode);
  newBtn.innerHTML += btn.unicode ? btn.unicode : btn.key[0];
  keyboardWrapper.append(newBtn);
});
ROOT.append(keyboardWrapper);
window.addEventListener("keydown", function (e) {
  document.getElementById(e.keyCode).classList.add("active");
});
window.addEventListener("keyup", function (e) {
  document.getElementById(e.keyCode).classList.remove("active");
});
