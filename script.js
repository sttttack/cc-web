document.addEventListener("DOMContentLoaded", function () {
  console.log("Uta Auto Import website loaded.");

  // Search Filter
  document.getElementById("search").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    document.querySelectorAll(".car").forEach((car) => {
      let name = car.getAttribute("data-name").toLowerCase();
      let price = car.getAttribute("data-price");
      car.style.display =
        name.includes(searchValue) || price.includes(searchValue)
          ? "block"
          : "none";
    });
  });

  // Booking Modal
  let modal = document.getElementById("booking-modal");
  let closeModal = document.querySelector(".close");

  document.querySelectorAll(".book-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      let carName =
        this.previousElementSibling.previousElementSibling.textContent;
      document.getElementById("car-model").value = carName;
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => (modal.style.display = "none"));

  // Booking Form Submission
  document
    .getElementById("booking-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Your booking has been submitted!");
      modal.style.display = "none";
    });
});
