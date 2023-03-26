document.querySelector("#registration").addEventListener("click", function() {
    document.querySelector("#LogIn").style.display = "none";
    document.querySelector("#createAccount").style.display = "block";
});

let form = document.forms.createAccount;
form.passwordConfirmation.addEventListener("input", function() {
    if (form.passwordConfirmation.value != form.password.value) form.passwordConfirmation.style.border = "1px solid red"
        else form.passwordConfirmation.style.border = "none"
})
