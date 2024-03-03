const body = document.getElementById("body");
const css = document.getElementById("css");
const color1 = document.getElementById("color_input1");
const color2 = document.getElementById("color_input2");
const btn = document.getElementById("btn");

const backgroundStyle = () => {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", () => {
	console.log("click");
})

color1.addEventListener("input", backgroundStyle);

color2.addEventListener("input", backgroundStyle);
