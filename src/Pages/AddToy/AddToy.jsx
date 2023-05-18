import React, { useEffect, useRef } from 'react';
import useDocumentTitle from '../../useDocumentTitle/useDocumentTitle';

const AddToy = () => {
    /* Upadte Title */
    useDocumentTitle('Baby-Toy | AddToy')

    const handleAddToy = (e) => {

    }

    return (
        <div className=" mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <div className='text-center space-y-2'>
                <h1 className="text-4xl font-medium">Add Toy</h1>
            </div>
            <form onSubmit={handleAddToy} className="my-10">
                <div className="flex flex-col space-y-5">
                    <div className='flex gap-5'>
                        <div className='w-1/2'>
                            <label htmlFor="email w-full">
                                <p className="font-medium text-slate-700 pb-2">Seller Name</p>
                                <input id="email" required name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Seller Email</p>
                                <input id="password" name="password" required type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='w-1/2'>
                            <label htmlFor="email w-full">
                                <p className="font-medium text-slate-700 pb-2">Toy Name</p>
                                <input id="email" required name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Price</p>
                                <input id="password" name="password" required type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-1/2'>
                            <label htmlFor="email w-full">
                                <p className="font-medium text-slate-700 pb-2">Quantity</p>
                                <input id="email" required name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Picture</p>
                                <input id="password" name="password" required type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='w-1/2'>
                            <label htmlFor="email w-full">
                                <p className="font-medium text-slate-700 pb-2">Rating</p>
                                <input id="email" required name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <p className="font-medium text-slate-700 pb-2">Category</p>

                            <select id='category' className="select select-primary w-full max-w-xs">
                                <option value="bus">bus</option>
                                <option value="truck">truck</option>
                                <option value="ambulance">ambulance</option>
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