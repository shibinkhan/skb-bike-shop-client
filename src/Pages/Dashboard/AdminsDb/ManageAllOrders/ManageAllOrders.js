import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';
import './ManageAllOrders.css';
import Header from '../../../Home/Header/Header';

const ManageAllOrders = () => {
    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    return (
        <div className="">
            <div className="container vh mt-4 pb-3">
                {
                    singleOrder.map(order =>
                        <ManageOrder
                            key={order._id}
                            order={order}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;