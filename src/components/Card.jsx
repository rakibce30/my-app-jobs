import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product, handleDelete}) => {
    const {id, title, description, price, discountPercentage, rating, thumbnail} = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" className='h-[200px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/product/${id}`} className="btn btn-primary btn-sm">View Details</Link>
                        <button className="btn btn-secondary btn-sm">Edit</button>
                        <button onClick={()=>handleDelete(id)} className="btn btn-neutral btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;