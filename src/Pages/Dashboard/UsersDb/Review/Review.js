import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        axios.post('https://guarded-sierra-27673.herokuapp.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Review Added Successfully.');
                };
            });
    };

    return (
        <div className="vh">
            <h2 className="fw-bold color my-3">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="review-form">
                <input className="review-input w-100 mb-3" placeholder="Your Name..." {...register("name", { required: true })} />
                <br />
                <input className="review-input w-100 mb-3" type="number" placeholder="Rating...(0-5)" {...register("rating", { required: true })} />
                <br />
                <textarea className="w-100" placeholder="Your Review..." {...register("review", { required: true })} />
                <br />
                <input className="button" type="submit" value="Add This Review" />
            </form>
        </div>
    );
};

export default Review;