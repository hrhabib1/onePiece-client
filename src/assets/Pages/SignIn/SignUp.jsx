const SignUp = () => {
    return (
        <div className="pt-1 mx-auto w-100">
        <form action="" className="p-16 bg-purple-200 text-black  mx-auto my-10 rounded text-center">
            <h1 className="text-2xl pb-5 font-extrabold">Please Sign Up Now</h1>
            <div>
            <p>Enter Your First Name:</p>
            <input className="bg-white text-black px-10 py-4 w-96" type="text" name="firstName" id="" placeholder="firstName" required/>
            </div>
            <div>
            <p className="mt-5">Enter Your Last Name:</p>
            <input className="bg-white text-black px-10 py-4 w-96" type="text" name="lastName" id="" placeholder="lastName" required/>
            </div>
            <div>
            <p className="mt-5">Enter Your Email Address:</p>
            <input className="bg-white text-black px-10 py-4 w-96" type="email" name="Email" id="" placeholder="Email" required/>
            </div>
            <div>
            <p className="text-black mt-5">Enter Your Password:</p>
            <input className="bg-white text-black px-10 py-4 w-96" type="password" name="password" id="" placeholder="Password" required/>
            </div>
            <div>
            <p className="text-black mt-5">Confirm Password:</p>
            <input className="bg-white text-black px-10 py-4 w-96" type="password" name="ConfirmPassword" id="" placeholder="ConfirmPassword" required/>
            </div>
           <button className="bg-blue-500 rounded py-5 px-10 my-5" type="submit">Sign Up</button>
           <h1>Or,</h1>
           <p> Already have an account? </p>
           <a className="text-red-600" href="/signIn">Sign in here </a>
           <a className="text-red-900 btn" href="/home">Go Back</a>
        </form>
    </div>
    );
};

export default SignUp;