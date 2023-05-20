import React from 'react';

const Feature = () => {
    return (
        <div className='flex my-10 gap-10 justify-around '>
            <div className='flex justify-evenly bg-pink-300 hover:bg-sky-300 transition-all py-10 px-10 rounded-md'>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold'>Baby Toys</h2>
                    <p className='font-bold'>Price:$20</p>
                    <p className='font-bold'>Shop Now</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/7jCKWMj/3.webp" alt="" />
                </div>
            </div>
            <div className='flex justify-evenly bg-pink-300 hover:bg-sky-300 transition-all py-10 px-10 rounded-md'>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold'>Baby Toys</h2>
                    <p className='font-bold'>Price:$25</p>
                    <p className='font-bold'>Shop Now</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/y5c1CRJ/2.webp" alt="" />
                </div>
            </div>
            <div className='flex justify-evenly bg-pink-300 hover:bg-sky-300 transition-all py-10 px-10 rounded-md'>
                <div className='space-y-5'>
                    <h2 className='text-2xl font-bold'>Baby Toys</h2>
                    <p className='font-bold'>Price:$20</p>
                    <p className='font-bold'>Shop Now</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/7jCKWMj/3.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Feature;