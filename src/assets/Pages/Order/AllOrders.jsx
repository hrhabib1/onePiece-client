import { useContext, useEffect, useState } from "react";
import Nevbar from "../../Shared/Nevbar/Nevbar";
import { AuthContext } from "../../../providers/AuthProviders";
import MyOrderRow from "./MyOrderRow";

const AllOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://onepiece-server.up.railway.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleOrderConfirm = id =>{
        const proceed = confirm('Are you sure you want to confirm it?');
        if(proceed){
          fetch(`https://onepiece-server.up.railway.app/orders/${id}`, {
              method: 'PATCH',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify({status: 'confirmed'})
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.modifiedCount > 0){
                  const remaining = orders.filter(order=> order._id !== id);
                  const update = orders.find(order=> order._id === id);
                  update.status = 'confirmed'
                  const newOrders = [update, ...remaining]
                  setOrders(newOrders);
              }
          })
        }
  }
    return (
        <div>
            <Nevbar></Nevbar>
            <div className="pt-28">
                <div className="overflow-x-auto border-red-400 bg-white text-black text-xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Service Name</th>
                                <th>Customer Name & Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            orders.map(order => <MyOrderRow
                              key={order._id}
                              order={order}
                              handleOrderConfirm={handleOrderConfirm}
                            ></MyOrderRow>)
                          }
                           
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;