import Nevbar from '../../Shared/Nevbar/Nevbar';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCart from './ServiceCart';

const Fishes = () => {
    const [fishServices, setFishServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addSellPost')
            .then(res => res.json())
            .then(data =>{
                const fishServise = data.filter(item => item.
                    category === 'fishes');
                    setFishServices(fishServise)
            })
    }, [])
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 fishServices.map(item => <ServiceCart
                 key={item._id}
                 item={item}
                 ></ServiceCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default Fishes;


 