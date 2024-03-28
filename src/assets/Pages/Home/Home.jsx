import Nevbar from "../../Shared/Nevbar/Nevbar";
import img1 from '../../images/Potato.jpg';
import img2 from '../../images/service/Boiler.jpg';
import img3 from '../../images/service/Pangas.jpg';
import img4 from '../../images/Fulcopy.jpg';
import img5 from '../../images/rice.jpeg';
import img6 from '../../images/meets.jpg';
const Home = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <h1 className="text-xl font-bold text-black mb-5 ml-10 pt-32">Top Selling Menu:</h1>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black">
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img2} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">ব্রয়লার মুরগী</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি পিস ২০টাকা</h3>
                        <p>ডেলিভারীর সময় সকাল ৮টা এবং বিকাল ৫টা।</p>
                        <p>আপনি আপনার চাহিদা মতো অর্ডার করতে পারবেন।</p>
                        <p>যোগাযোগঃ ০১৫......৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img3} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">পাঙ্গাশ মাছ</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি পিস ১৪ টাকা</h3>
                        <p>ডেলিভারীর সময় সকাল ৮টা এবং বিকাল ৫টা।</p>
                        <p>আপনি আপনার চাহিদা মতো অর্ডার করতে পারবেন।</p>
                        <p>যোগাযোগঃ ০১৫......৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;