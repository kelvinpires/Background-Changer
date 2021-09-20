const changeBtn = document.querySelector("#change-color");
const input = document.querySelector("input");
const copyBtn = document.querySelector("#copy");
const modal = document.querySelector(".modal-wrapper");

changeBtn.addEventListener("click", changeColor);
copyBtn.addEventListener("click", copyColor);

const colorHex = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function changeColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += colorHex[Math.floor(Math.random() * colorHex.length)];
  }

  document.body.style.background = color;
  input.value = color;
  input.style.color = color;
  copyBtn.style.background = color;
}

function copyColor() {
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);

  modal.classList.add("active");

  setTimeout(() => {
    modal.classList.remove("active");
  }, 2000);
}
