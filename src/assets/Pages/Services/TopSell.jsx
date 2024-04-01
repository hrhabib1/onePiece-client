import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCart from './ServiceCart';

const TopSell = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addSellPost')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful">
                
                {
                 services.map(item => <ServiceCart
                 key={item._id}
                 item={item}
                 ></ServiceCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default TopSell;


 