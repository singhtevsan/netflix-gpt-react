import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import userValidate from "../utils/userValidate";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleLoginForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleUserButtonClick = () => {

        // valid form data
        const message = userValidate(name, email, password);
        setErrorMessage(message);

        if(message) return;

        // sign in or sign up the user

        if(!isSignInForm){
            // sign up the user
            
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
    
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_AVATAR
                }).then(() => {
                    // Profile updated!
                    // adding user to redux store
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    }));
                    

                }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage);
            });

        }
        else {
            // sign in the user
            
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " : " + errorMessage);
            });
        }
    };

    return (
        <div className="h-[100vh] bg-cover bg-[image:var(--bg-image)] relative">
            
            <Header />

            <div className="flex justify-center items-center h-full">
                <div className="p-8 w-[30%] bg-black bg-opacity-80 rounded-md">

                    <form className="w-[80%] m-auto" onSubmit={(event)=>event.preventDefault()}>

                        <h1 className="text-white text-2xl font-bold my-2">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                        {
                            isSignInForm ? '' :
                            <input ref={name} className="bg-gray-900 text-white w-full my-2 p-2 rounded" type="text" placeholder="Enter Your Name" />
                        }

                        <input ref={email} className="bg-gray-900 text-white w-full my-2 p-2 rounded" type="email" placeholder="Enter Your Email" />
                
                        <input ref={password} className="bg-gray-900 text-white w-full my-2 p-2 rounded" type="password" placeholder="Enter Your Password" />
                        {
                            isSignInForm ?  
                                (errorMessage ? <span className=" text-red-600">{errorMessage}</span> : '')
                            : 
                                (
                                    errorMessage ? <span className="text-red-600">{errorMessage}</span> : 
                                    <p className="text-white text-xs">Password must be 8 digit long and should contain one capital and one special letter.</p>
                                )
                            
                        }
                        

                        <button className="bg-red-600 text-white w-full my-2 p-1 rounded text-xl cursor-pointer" onClick={handleUserButtonClick}>
                            {isSignInForm ? 'Sign In' : 'Sign Up'}
                        </button>

                    </form>

                    <div className="w-[80%] m-auto text-white my-6">
                        <p className="my-1">{isSignInForm ? 'New to Netflix? ' : 'Already have Account? ' }

                            <span className="font-bold cursor-pointer hover:underline" 
                                onClick={toggleLoginForm}>{isSignInForm ? 'Sign up now.' : 'Sign in here.'}
                            </span>
                        </p>
                        <p className="text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        <span className="text-blue-700 underline cursor-pointer">Learn more.</span>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default Login;