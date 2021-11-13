import React, { useEffect, useState } from 'react';

const Order = ({ order }) => {
    const { _id, bikeInfo, customerInfo, status } = order;
    const { name, price, img, description } = bikeInfo;
    const { customerName, email, phone, address } = customerInfo;

    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    const handleDeleteO = id => {
        const procced = window.confirm('Are you sure want to cancel this Order?');
        if (procced) {
            fetch(`https://guarded-sierra-27673.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainings = singleOrder.filter(remaining => remaining._id !== id);
                        // console.log(remainings);
                        alert('Order Canceled, Reload Now.')
                        setSingleOrder(remainings);
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
                    <p>Order Status: <span className={!status ? 'fw-bold text-danger' : 'fw-bold text-success'}>{!status ? 'Pending.' : 'Aproved.'}</span></p>
                    <button onClick={() => { handleDeleteO(_id) }} className="button  mt-5">Cancel This Order</button>
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info-your MT-3">
                    <h3 className="color">About You</h3>
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

export default Order;