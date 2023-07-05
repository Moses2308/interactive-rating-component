const form = document.querySelector("#rating-form");
const openForm = document.querySelector("#open-form");
const submittedForm = document.querySelector("#submitted-form");
const inputButtons = document.querySelectorAll("input[type=radio]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputButtons.forEach((element) => {
    if (element.checked === true) {
      const ratingValue = element.dataset.rating;
      submittedForm.querySelector(".customer-rating").textContent = ratingValue;
    }
  });

  openForm.style.display = "none";
  submittedForm.style.display = "grid";
});
