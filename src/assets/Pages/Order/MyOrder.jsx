import { useContext, useEffect, useState } from "react";
import Nevbar from "../../Shared/Nevbar/Nevbar";
import { AuthContext } from "../../../providers/AuthProviders";

const MyOrder = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const url = `http://localhost:5000/orders?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Nevbar></Nevbar>
            <h1>{orders.length}</h1>
        </div>
    );
};

export default MyOrder;