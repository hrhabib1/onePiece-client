import Nevbar from '../../../Shared/Nevbar/Nevbar';
import img2 from '../../../images/service/Curp.jpg'
import img1 from '../../../images/service/Grass curp.jpg'
import img3 from '../../../images/service/Pangas.jpg'
import img4 from '../../../images/service/Pangas p.webp'
import img6 from '../../../images/service/silver-carp.jpg'
const Fishes = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img1} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">রুই মাছ</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ৩০০টাকা</h3>
                        <h3 className='font-bold text-2xl'> --- প্রতি পিস ২০ টাকা</h3>
                        <p>ডেলিভারীর সময় সকাল ৮টা এবং বিকাল ৫টা।</p>
                        <p>আপনি আপনার চাহিদা মতো অর্ডার করতে পারবেন।</p>
                        <p>যোগাযোগঃ ০১৫......৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img2} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">কার্প মাছ</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ২৫০টাকা</h3>
                        <h3 className='font-bold text-2xl'> --- প্রতি পিস ১৫ টাকা</h3>
                        <p>ডেলিভারীর সময় সকাল ৮টা এবং বিকাল ৫টা।</p>
                        <p>আপনি আপনার চাহিদা মতো অর্ডার করতে পারবেন।</p>
                        <p>যোগাযোগঃ ০১৫......৭০।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img4} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">পাঙ্গাশ মাছ</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ১৮০ টাকা</h3>
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
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img6} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">সিলবার কার্প</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ১৬০ টাকা</h3>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি পিস ১৩ টাকা</h3>
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

export default Fishes;