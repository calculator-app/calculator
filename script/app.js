const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
	item.onclick = function () {
		if (item.id == "clear") {
			return (display.innerText = "");
		}
		if (item.id == "backspace") {
			let string = display.innerText.toString();
			return (display.innerText = string.substr(0, string.length - 1));
		}
		if (item.id == "plmn") {
			if (display.innerText.charAt(0) === "-") {
				return (display.innerText = display.innerText.slice(1));
			}
			return (display.innerText = "-" + display.innerText);
		}
		if (display.innerText.includes("%") && item.id == "equal") {
			let split = display.innerText.split("%");
			let percent = Number(split[0]);
			let value = Number(split[1]);
			return (display.innerText = (percent / 100) * value);
		}
		if (display.innerText.includes("^") && item.id == "equal") {
			let base = display.innerText.slice(0, display.innerText.indexOf("^"));
			let exponent = display.innerText.slice(display.innerText.indexOf("^") + 1);
			return (display.innerText = base ** exponent);
		}
		if (display.innerText != "" && item.id == "equal") {
			return (display.innerText = eval(display.innerText));
		}
		if (display.innerText == "" && item.id == "equal") {
			display.innerText = "Empty!";
			setTimeout(() => (display.innerText = ""), 2000);
			return;
		}
		return (display.innerText += item.id);
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
