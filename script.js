const previousGang = document.getElementById("previousGang");
const gangName = document.getElementById("gangName");
const form = document.getElementById("form");

// Show / Hide Previous Gang Name
previousGang.addEventListener("change", () => {
    if (previousGang.value === "Yes") {
        gangName.style.display = "block";
        gangName.required = true;
    } else {
        gangName.style.display = "none";
        gangName.required = false;
        gangName.value = "";
    }
});

// Submit Form
form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Application Submitted Successfully!\n\nThank you for applying to SANTOS MAFIA.\nWe will contact you on Discord after reviewing your application.");

    form.reset();

    gangName.style.display = "none";

});
