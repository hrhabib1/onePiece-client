import { useLoaderData } from "react-router-dom";
import Nevbar from "../../Shared/Nevbar/Nevbar";

const Order = () => {
    const service = useLoaderData();
    const { title, image, priceKilo, price } = service;
    return (
        <div>
            <Nevbar></Nevbar>
            <h1 className="pt-28 text-3xl text-center font-extrabold text-warning my-5">Order Service:</h1>
            <div className="px-52">
            <div className="hero  bg-base-200 mb-0">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">Price: {priceKilo} or, {price}</p>
                    </div>
                </div>
            </div>
            <form className="py-16 w-full bg-purple-200 text-black  mx-auto mb-10 rounded text-center">
                <h1 className="text-2xl pb-5 font-extrabold">Order Here</h1>
                <div>
                    <p>Enter Your First Name:</p>
                    <input className="bg-white text-black px-10 py-4 w-96" type="text" name="firstName" id="" placeholder="firstName" required />
                </div>
                <div>
                    <p className="mt-5">Enter Your Last Name:</p>
                    <input className="bg-white text-black px-10 py-4 w-96" type="text" name="lastName" id="" placeholder="lastName" required />
                </div>
                <div>
                    <p className="mt-5">Enter Your Email Address:</p>
                    <input className="bg-white text-black px-10 py-4 w-96" type="email" name="email" id="" placeholder="Email" required />
                </div>
                <div>
                    <p className="text-black mt-5">Enter Your Password:</p>
                    <input className="bg-white text-black px-10 py-4 w-96" type="password" name="password" id="" placeholder="Password" required />
                </div>
                <div>
                    <p className="text-black mt-5">Confirm Password:</p>
                    <input className="bg-white text-black px-10 py-4 w-96" type="password" name="confirmPassword" id="" placeholder="ConfirmPassword" required />
                </div>
                <button className="bg-blue-500 rounded py-5 px-10 w-96 my-5 btn-block" type="submit">Order Confirm</button>
            </form>
            </div>
        </div>
    );
};

export default Order;