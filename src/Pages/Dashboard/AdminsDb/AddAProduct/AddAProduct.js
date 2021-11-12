import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../../../Home/Header/Header';
import './AddAProduct.css';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        axios.post('http://localhost:5000/bikes', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('New Bike Added Successfully.')
                }
            })
    };

    return (
        <div className="add-service vh">
            <h1 className="fw-bold color my-3">Add a New Bike</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name..." {...register("name")} />
                <input placeholder="Price..." {...register("price")} />
                <textarea placeholder="Description..." {...register("description")} />
                <textarea placeholder="Specifications..." {...register("specifications")} />
                <input placeholder="Card Image Link..." {...register("img")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Add This New Bike" />
            </form>
        </div>
    );
};

export default AddAProduct;