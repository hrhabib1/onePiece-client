import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const ServiceCart = ({item}) => {
    const { user } = useContext(AuthContext);
    const {title, image, details, priceKilo, price, mobile,  date, _id} = item;
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
                            {
                               user?.email === 'shakilahmed7924@gmail.com'? 
                               <button></button> :
                               <Link to={`/order/${_id}`}>
                               <button className="btn btn-primary">Order Now</button>
                               </Link>
                            }
                           
                            
                        </div>
                    </div>
                </div>
    );
};

export default ServiceCart;