const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = function () {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == "plmn") {
        if (display.innerText.charAt(0) === "-") {
          display.innerText = display.innerText.slice(1);
        } else {
          display.innerText = "-" + display.innerText;
        }
    } else if (display.innerText.includes("%") && item.id == "equal") {
      let split = display.innerText.split("%");
      let percent = Number(split[0]);
      let value = Number(split[1]);
      display.innerText = (percent / 100) * value;
    } else if (display.innerText.includes("^") && item.id == "equal") {
      let base = display.innerText.slice(0, display.innerText.indexOf("^"));
      let exponent = display.innerText.slice(display.innerText.indexOf("^") + 1);
      display.innerText = (base ** exponent);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = function () {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};