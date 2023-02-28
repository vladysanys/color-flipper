const buttonMain = document.querySelector(".main-button");
const background = document.querySelector("section");
const span = document.querySelector("span");
const buttonSimple = document.querySelector(".margin-left");
const buttonHex = document.querySelector(".margin-left-2");
let sum = 0;
let simple = true;
buttonSimple.addEventListener("click", () => {
  simple = true;
});
buttonHex.addEventListener("click", () => {
  simple = false;
});
buttonMain.addEventListener("click", (event) => {
  const colorArraySimple = ["red", "yellow", "green", "white", "blue"];
  let colors = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `0`,
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
  ];
  let randomColor = `#`;
  if (simple) {
    if (event && sum <= colorArraySimple.length - 2) {
      background.style.backgroundColor = `${colorArraySimple[sum]}`;
      span.textContent = `${colorArraySimple[sum]}`;
      sum = sum + 1;
    } else {
      sum = 0;
      background.style.backgroundColor = `${colorArraySimple[sum++]}`;
      span.textContent = `${colorArraySimple[sum - 1]}`;
    }
  }
  if (!simple) {
    for (let x = 0; x < 6; x++) {
      let index = Math.floor(Math.random() * 16);
      let value = colors[index];
      randomColor += value;
    }
    background.style.backgroundColor = `${randomColor}`;
    span.textContent = `${randomColor}`;
  }
});
