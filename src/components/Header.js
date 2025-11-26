import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector( (store)=>store.user );

    const handleSignOut = () => {
        
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            navigate("/error");

        });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const {uid, email, displayName, photoURL} = user;

                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                    })
                );
                navigate("/browse");

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // unsubscribe when components unmounts
        return () => {
            unsubscribe();
        };

    }, []);


    return (
        <div className="w-full bg-gradient-to-b from-black flex justify-between items-center">
            
            <img className="h-20 cursor-pointer" src={LOGO} alt="netflix" />
            {
                user ? 
                <div className="mx-3 cursor-pointer" onClick={handleSignOut}>
                    <img src={user?.photoURL} alt="user" title="sign out" className="border-2 rounded" />
                </div> : ''
            }
            
        </div>
    )
};

export default Header;