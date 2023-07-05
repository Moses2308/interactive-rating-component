const form = document.querySelector("#rating-form");
const openForm = document.querySelector("#open-form");
const submittedForm = document.querySelector("#submitted-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  openForm.style.display = "none";
});
// TODO : prevent form submission, get data from form, make new card using data
