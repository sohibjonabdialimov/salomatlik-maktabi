const form = document.getElementById("form");
const resultSpan = document.getElementById("resultSpan");
const kg = document.getElementById("kg");
const m = document.getElementById("m");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const natija = +kg?.value / (+m?.value * +m?.value)
  console.log(natija);
  resultSpan.textContent = natija;
})


