const ServiceCart = ({item}) => {
    const {title, image, details, priceKilo, price, mobile,  date} = item;
    return (
        <div className="card card-compact mx-24 bg-base-500 shadow-xl">
                    <figure><img className='h-96 w-06' src={image} alt="broilar" /></figure>
                    <div className="card-body text-start ml-24">
                        <h2 className="card-title">{title}</h2>
                        <h3 className='font-bold text-2xl'>দামঃ {priceKilo}</h3>
                        <h3 className='font-bold text-2xl'> --- {price} </h3>
                        <p>ডেলিভারীর সময় সকাল ৮টা এবং বিকাল ৫টা।</p>
                        <p>{details}</p>
                        <p>যোগাযোগঃ {mobile}।</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
    );
};

export default ServiceCart;