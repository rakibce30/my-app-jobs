import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingpleProduct = () => {
    const { id } = useParams();
    const products = useLoaderData();
    const product = products.products.filter(product => product.id == id)
    const { title, description, category, price, discountPercentage, rating, thumbnail, brand, stock } = product[0];
    console.log(title);
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">Discount: {discountPercentage}</p>
                        <p className="py-6">Rating: {rating}</p>
                        <p className="py-6">Brand: {brand}</p>
                        <p className="py-6">Category: {category}</p>
                        <p className="py-6">stock: {stock}</p>
                        <p className="py-6">description: {description}</p>
                        <Link to="/" className='btn btn-primary'>Home</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingpleProduct;