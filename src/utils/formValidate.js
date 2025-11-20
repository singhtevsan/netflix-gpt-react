export const checkValidSignIn = (email, password) => {

    if(!email || !password) return "Please fill out the fields properly";

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Must be a valid email.";
    if(!isPasswordValid) return "Incorrect password.";

    return null;
};

export const checkValidSignUp = (name, email, password) => {

    if(!name || !email || !password) return "Please fill out the fields properly";

    const isNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isNameValid) return "Name must 4 digit long and should be valid.";
    if(!isEmailValid) return "Email ID is not valid.";
    if(!isPasswordValid) return "Password is not valid.";

    return null;
}