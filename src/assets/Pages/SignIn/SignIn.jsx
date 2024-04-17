import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import {  useLocation, useNavigate } from "react-router-dom";


const SignIn = () => {

   const { signIn, providerLogIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/home';

    const naviget = useNavigate()
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
         signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user, error);
            naviget(from, {replace: true});
            form.reset();
         
             setError('');
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);}
        )
    }
    const handleGoogleSignin = () =>{
        providerLogIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            naviget('/home');
        })
        .catch(error => setError(error))
    }
    return (
        <div className="py-32 mx-auto">
            <form action="" onSubmit={handleLogIn} className="p-16 bg-purple-200 text-black mx-auto my-10 rounded text-center">
                <h1 className="text-2xl pb-5 font-extrabold">Please Sign in Fast</h1>
                <div>
                <p>Enter Your Email Address:</p>
                <input className="bg-white text-black px-10 py-4 w-96" type="email" name="email" id="" placeholder="Email" required/>
                </div>
                <div>
                <p className="text-black mt-5">Enter Your Password:</p>
                <input className="bg-white text-black px-10 py-4 w-96" type="password" name="password" id="" placeholder="Password" required/>
                </div>
               <button className="bg-blue-500 rounded py-5 px-10 my-5" type="submit">Sign In</button>
               <p className='text-danger m-3'>{error}</p>
                                <button onClick={handleGoogleSignin} className="btn btn-warning mt-5"> Sign in with Goagle</button>
               <h1>Or,</h1>
               <p> Do not have an account? </p>
               <a className="text-red-600" href="/signUp">Sign Up here </a>
            </form>
        </div>
    );
};

export default SignIn;