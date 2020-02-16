const formSubmit = document.querySelector("#contactForm");
formSubmit.addEventListener("submit", validateForm);

//Funksjonen vi laget event til
function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");

    if (firstName.value.trim().length >= 2) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}