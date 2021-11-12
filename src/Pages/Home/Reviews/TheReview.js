import React from 'react';

const TheReview = ({ theReview }) => {
    const { name, rating, img, review } = theReview;

    return (
        <div className="col">
            <div className="card h-100 bg-color-custom py-5">
                <img src={img} className="card-img-top w-50 mx-auto mb-4 rounded-circle" alt="..." />
                <div className="card-body text-center p-4 pb-0">
                    <h5 className="card-title my-4 text-primary">{name}</h5>
                    <h5 className="card-title my-4">Rating: {rating}</h5>
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default TheReview;