const form = document.querySelector("#rating-form");
const openForm = document.querySelector("#open-form");
const submittedForm = document.querySelector("#submitted-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  openForm.style.display = "none";
  submittedForm.style.display = "block";
});
// TODO : prevent form submission, get data from form, make new card using data
