import Nevbar from '../../Shared/Nevbar/Nevbar';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCart from './ServiceCart';

const Rice = () => {
    const [riceServices, setRiceServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addSellPost')
            .then(res => res.json())
            .then(data =>{
                const riceServise = data.filter(item => item.
                    category === 'rice');
                    setRiceServices(riceServise)
            })
    }, [])
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 riceServices.map(item => <ServiceCart
                 key={item._id}
                 item={item}
                 ></ServiceCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default Rice;


 