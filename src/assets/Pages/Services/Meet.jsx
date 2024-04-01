import Nevbar from '../../Shared/Nevbar/Nevbar';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCart from './ServiceCart';

const Meet = () => {
    const [meetServices, setMeetServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addSellPost')
            .then(res => res.json())
            .then(data =>{
                const meetServise = data.filter(item => item.
                    category === 'meets');
                    setMeetServices(meetServise)
            })
    }, [])
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 meetServices.map(item => <ServiceCart
                 key={item._id}
                 item={item}
                 ></ServiceCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default Meet;


 