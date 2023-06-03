import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    const handleDelete = (id) => {
        const newProducts = products.filter(product => product.id !== id)
        setProducts(newProducts);
    }

    const handleEdit = event => {
        event.preventDefault();
        const count = 0;
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const img = form.img.value;
        const price = form.price.value;

        const addProducts = {
            id: count + 244, name, description, category, img, price: parseFloat(price)
        }
        const newProducts = [...products, addProducts]
        setProducts(newProducts);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const search = products.filter(p => p.title == text);
        setProducts(search);
    };

    const handleAss = () => {

    }

    return (
        <div className='max-w-screen-xl mx-auto p-4'>
            <h1 className='text-2xl font-bold text-center'>All Products</h1>
            <div>
                <form onSubmit={handleSearch} className='text-center'>
                    <input type="text" name="text" className='border' placeholder='search....' id="" />
                    <input type="submit" className='btn btn-primary' value="Search" />
                </form>
            </div>

            <div className='flex flex-row space-x-4'>
                <div>
                    <div>
                        <div className="btn-group">
                            <button onClick={handleAss} className="btn btn-active">Ascending</button>

                            <button className="btn">Descending</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 my-8 w-3/4'>
                        {
                            products?.map(product => <Card
                                key={product.id}
                                product={product}
                                handleDelete={handleDelete}
                            ></Card>)
                        }
                    </div>
                </div>
                <div className='w-1/4'>
                    <div>
                        <h2 className='text-xl font-bold'> Add Products</h2>

                        <form onSubmit={handleEdit}>
                            <div className="form-control w-full ">
                                <label className="label">Product Name </label>
                                <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">Description </label>
                                <input type="text" name='description' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">Category </label>
                                <select name='category' className="select select-bordered w-full max-w-xs">
                                    <option disabled>Select</option>
                                    <option>electronic</option>
                                    <option>men clothing</option>
                                    <option>women clothing</option>
                                </select>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">Image Url </label>
                                <input type="text" name='img' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">Price </label>
                                <input type="text" name='price' placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full mt-4">
                                <input type="submit" value="Update" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'> category</h2>
                        <div className='flex flex-col'>
                            <Link>smartphones</Link>
                            <Link>laptops</Link>
                            <Link>smartphones</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;