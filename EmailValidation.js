const emailRegex = RegExp("^[abc][A-Za-z0-9]+[_+.-][@]{1}[bridgelabz]+[.][co][.][a-zA-Z]{0,2}$");
function validateEmail(email) {
    if (emailRegex.test(email))
        console.log(email + " is Valid");
    else
        throw new Error(email + "inavlid email")
}
try {
    validateEmail("abca.abc@gmail.com");
    validateEmail(".abc@abc.com");

}
catch (e) {
    console.error(e);
}