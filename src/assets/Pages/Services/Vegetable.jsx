import Nevbar from '../../Shared/Nevbar/Nevbar';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCart from './ServiceCart';

const Vegetable = () => {
    const [vegetableServices, setVegetableServices] = useState([]);

    useEffect(() => {
        fetch('https://onepiece-server.up.railway.app/addSellPost')
            .then(res => res.json())
            .then(data =>{
                const vegetableServise = data.filter(item => item.
                    category === 'vegetables');
                    setVegetableServices(vegetableServise)
            })
    }, [])
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 vegetableServices.map(item => <ServiceCart
                 key={item._id}
                 item={item}
                 ></ServiceCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default Vegetable;


 