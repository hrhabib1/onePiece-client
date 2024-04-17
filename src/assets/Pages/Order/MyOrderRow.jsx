const MyOrderRow = ({ order, handleDelete, handleOrderConfirm }) => {
    const { _id, customerName, title, email, price, priceKilo, date, image, quantity, status } = order;
   
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    <div>
                        <div className="font-bold pt-5 ml-2">{title}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName} <br />
                {email}

            </td>
            <td>{price} <br /> {priceKilo}</td>
            <td>{date}</td>
            <td>{quantity}</td>
            <th>
               { 
               status === 'confirmed'? <span className="font-bold text-primary">Order Confirmed</span>
               :
               <button onClick={()=>handleOrderConfirm(_id)} className="btn btn-ghost btn-xs">pending</button>}
            </th>
        </tr>
    );
};

export default MyOrderRow;