const ratingSide = document.querySelector(".rating-side");
const submit = document.querySelector(".btn-submit");
const thanks = document.querySelector(".thanks");
const btns = document.querySelectorAll(".btn");
const numberPicked = document.querySelector("#number-picked");

btns.forEach((rating) => {
  rating.addEventListener("click", () => {
    numberPicked.textContent = rating.value;
  });
});

submit.addEventListener("click", () => {
  if (numberPicked.textContent !== "") {
    ratingSide.classList.add("hidden");
    thanks.classList.remove("hidden");
  } else {
    alert("You must make a rating selection to continue!");
    preventDefault();
  }
});
