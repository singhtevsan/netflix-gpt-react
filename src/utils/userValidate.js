import { checkValidSignIn, checkValidSignUp } from "../utils/formValidate";

const userValidate = (name,email,password) => {

    let message=null;

    // user is signing in
    if(name.current == null) {
        message = checkValidSignIn(email.current.value, password.current.value);
    }
    // user is signing up
    else {
        message = checkValidSignUp(name.current.value, email.current.value, password.current.value);
    }
    
    return message;
};

export default userValidate;