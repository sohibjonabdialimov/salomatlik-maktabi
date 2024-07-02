const form = document.getElementById("form");
const resultSpan = document.getElementById("resultSpan");
const kg = document.getElementById("kg");
const m = document.getElementById("m");
const show_book = document.getElementById("show_book");
const read_book_btn = document.getElementById("read_book_btn");


form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const natija = +kg?.value / (+m?.value * +m?.value)
  console.log(natija);
  resultSpan.textContent = natija;
})

read_book_btn.addEventListener("click", () => {
  show_book.style.display = "flex";
})

function onHandle(e){
  console.log("click");
}