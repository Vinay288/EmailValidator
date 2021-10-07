const emailRegex = RegExp("^[abc][A-Za-z0-9]+[@]{1}[bridgelabz]+[.][co][.][a-zA-Z]+$");
function validateEmail(email)
{
    if(emailRegex.test(email))
        console.log(email + " is Valid");
    else
        throw new Error(email+"inavlid email")
}
try
{
    validateEmail("abca.abc@gmail.com");
    validateEmail(".abc@abc.com");
}
catch(e)
{
    console.error(e);
}