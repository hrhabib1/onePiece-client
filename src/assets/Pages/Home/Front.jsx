import '../../../Style/Style.css'
import img1 from '../../images/meets.jpg';
import img2 from '../../images/fishes.jpeg';
import img3 from '../../images/vegetables.jpg';
import img4 from '../../images/spices.jpg';
import img5 from '../../images/rice.jpeg';
const Front = () => {
    return (
        <div>
            <div className="h-24 w-full bg-violet-400 p-10 flex justify-between items-center">
                <h1 className="font-extrabold text-3xl text-purple-800 italic ml-24">OnePiece<span className="text-white">.com</span></h1>
                <a className="btn bg-purple-200 text-black" href="/signUp">SignIn/SignUp</a>
            </div>
            <div className="p-10 text-black">
                <h1 className=" text-3xl font-bold mb-10">About OnePiece.com :</h1>
                <div className=" about">
                    <div className='bg-slate-500 bg-opacity-80 py-10 rounded'>
                        <p className='pp '> OnePiece.com একটি অনলাইন বাজার। যেখান থেকে আপনি আপনার জন্য নির্দিষ্ট পরিমাণে তরিতরকারি, সবজি, মাছ, মাংস কিনতে পারবেন। বর্তমানে অধিকাংশ পণ্য বাজার থেকে স্বল্প পরিমানে ক্রয় করা যায় না যেমনঃ একপিস মাছ, একপিস মুরগীর মাংস, একপিস গরু বা খাসীর মাংস ইত্যাদি। কিন্তু OnePiece.com থেকে সহজেই পাওয়া যাবে এবং অর্ডার করলেই এটি রুমে রুমে গিয়ে ডেলিভারী দেওয়া হয়ে থাকে। এটি শুধুমাত্র নোবিপ্রবির শিক্ষার্থীদের জন্য তৈরি। এতে শিক্ষার্থীরা বাজারে যাওয়ার ঝামেলা থেকে মুক্তি পাবে এবং শিক্ষার্থীদের সময় সাশ্রয় হবে। তাই দেরী না করেই OnePiece.com এ লগইন বা রেজিস্ট্রেশন করুন এবং আপনার ইচ্ছেমতো অর্ডার করুন। </p>
                        <a className="btn bg-purple-200 text-black" href="/signUp">SignIn/SignUp</a>
                    </div>
                </div>
            </div>
            <div className="p-10 text-black">
            <h1 className=" text-3xl font-bold  mb-10">Category :</h1>
            <div className="flex flex-row gap-8 mx-auto catagory">
                <div className="card w-96 bg-base-500 shadow-xl image-full">
                    <figure><img src={img1} alt="meets" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Meats</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img2} alt="fishes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Fishes</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img3} alt="vegetable" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Vegetables</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img4} alt="spice" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Spices</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={img5} alt="rice" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold mt-16 mx-auto text-white">Rice</h2>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Front;