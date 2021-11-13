import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../../../Home/Header/Header';
import './MyOrdrs.css';
import Order from './Order';

const MyOrders = () => {
    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    const { user } = useAuth();

    const myOrders = singleOrder.filter(myOrder => myOrder.customerInfo.email === user.email);
    // console.log(myOrders);



    return (
        <div>
            <div className="container vh mt-3">
                {
                    myOrders.map(order =>
                        <Order
                            key={order._id}
                            order={order}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;