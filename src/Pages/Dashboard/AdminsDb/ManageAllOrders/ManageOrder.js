import React, { useEffect, useState } from 'react';

const ManageOrder = ({ order }) => {
    const { _id, bikeInfo, customerInfo } = order;
    const { name, price, img, description } = bikeInfo;
    const { customerName, email, phone, address } = customerInfo;

    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    const handleDeleteMO = id => {
        const procced = window.confirm('Are you sure want to delete this order?');
        if (procced) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const remainingPlans = singleOrder.filter(remaining => remaining._id !== id);
                        setSingleOrder(remainingPlans);
                        alert('Order Deleted, Reload Now.')
                    };
                });
        };
    };

    return (
        <div>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-4">
                    <img src={img} className="img-fluid" alt="..." />
                </div>
                <div className="col-12 col-md-6 col-lg-4 order-info MT-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Price: <span className="fw-bold">BDT {price} Only.</span></p>
                    <p>Status: <span className="text-danger fw-bold">Pending</span>.</p>
                    <button className="button my-3 me-2">Aprove This Order</button>
                    <button onClick={() => { handleDeleteMO(_id) }} className="button">Delete This Order</button>
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info-your MT-3">
                    <h3 className="color">About Customer</h3>
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p>Address: <span className="fw-bold">{address}.</span></p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ManageOrder;