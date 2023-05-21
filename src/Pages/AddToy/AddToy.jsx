import React, { useContext, useEffect, useRef } from 'react';
import useDocumentTitle from '../../useDocumentTitle/useDocumentTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const AddToy = () => {
    /* Upadte Title */
    useDocumentTitle('Baby-Toy | AddToy')



    const handleAddToy = (e) => {
        e.preventDefault()

        const form = e.target;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const picture = form.picture.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const toyName = form.name.value;


        const toyData = {
            sellerName,
            sellerEmail,
            name: toyName,
            price,
            rating,
            picture,
            quantity,
            category
        }

        fetch('https://baby-toy-server.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toyData),
        })
            .then(response => response.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success('  Successfully🤟 Added !')
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle any errors that occurred during the request
            });

        form.reset()
    }



    const { user } = useContext(AuthContext)

    return (
        <div className=" mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <div className='text-center space-y-2'>
                <h1 className="text-4xl font-medium">Add Toy</h1>
            </div>
            <form onSubmit={handleAddToy} className="my-10">
                <div className="flex flex-col space-y-5">
                    <div className='flex gap-5'>
                        <div className='w-1/2'>
                            <label htmlFor="sellerName">
                                <p className="font-medium text-slate-700 pb-2">Seller Name</p>
                                <input id="sellerName" name="sellerName" defaultValue={user.displayName} type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Seller Email</p>
                                <input id="email" name="sellerEmail" defaultValue={user.email} type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='w-1/2'>
                            <label htmlFor="name">
                                <p className="font-medium text-slate-700 pb-2">Toy Name</p>
                                <input id="name" name="name" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Toy Name" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Price</p>
                                <input id="price" name="price" type="number" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Toy price" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-1/2'>
                            <label htmlFor="quantity">
                                <p className="font-medium text-slate-700 pb-2">Quantity</p>
                                <input id="quantity" name="quantity" type="number" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Quantity" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="picture">
                                <p className="font-medium text-slate-700 pb-2">Picture</p>
                                <input id="picture" name="picture" type="text" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Price" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='w-1/2'>
                            <label htmlFor="rating">
                                <p className="font-medium text-slate-700 pb-2">Rating</p>
                                <input id="rating" name="rating" type="number" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Rating" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <p className="font-medium text-slate-700 pb-2">Category</p>

                            <select id='category' name='category' className="select select-primary w-full max-w-xs">
                                <option value="sportsCars">sportsCars</option>
                                <option value="movieCars">movieCars</option>
                                <option value="construction">construction</option>
                            </select>

                        </div>
                    </div>
                    <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <span>Add Toy</span>
                    </button>


                </div >
            </form >
        </div >
    );
};

export default AddToy;