

console.log(document)
const color1 = document.getElementById("input1");
const color2 = document.getElementById("input2");
const body = document.querySelector('body');

const setGradient = ()=>{
	body.style.background =
	`linear-gradient(to right, ${color1.value}, ${color2.value}`
}

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)