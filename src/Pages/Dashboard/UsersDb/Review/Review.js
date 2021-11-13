import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../../Home/Header/Header';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        axios.post('https://guarded-sierra-27673.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Review Added Successfully.')
                }
            })
    };

    return (
        <div className="add-service vh">
            <h1 className="fw-bold color my-3">Add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="YourName..." {...register("name")} />
                <input type="number" placeholder="Rating...(0-5)" {...register("rating")} />
                <textarea placeholder="Your Review..." {...register("review")} />
                <input className="button addService w-25" type="submit" value="Add This Review" />
            </form>
        </div>
    );
};

export default Review;