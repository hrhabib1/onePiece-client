import Nevbar from '../../../Shared/Nevbar/Nevbar';
import img2 from '../../../images/service/Boiler.jpg'
import img1 from '../../../images/service/Broiler p.jpg'
import img3 from '../../../images/service/Beef meat.jpg'
import img4 from '../../../images/service/Khasi.png'
const Meet = () => {
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={img1} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">ব্রয়লার মুরগী</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ২০০টাকা</h3>
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
                        <h2 className="card-title">গরুর মাংস</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ৭৫০ টাকা</h3>
                        <h3 className='font-bold text-2xl'> --- প্রতি পিস ৩০ টাকা</h3>
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
                        <h2 className="card-title">খাসির মাংস</h2>
                        <h3 className='font-bold text-2xl'>দামঃ প্রতি কেজি ৭৫০ টাকা</h3>
                        <h3 className='font-bold text-2xl'> --- প্রতি পিস ৩০ টাকা</h3>
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

export default Meet;