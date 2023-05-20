import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    return (
        <div>
            <div className="w-full my-10">

                <div className="container flex flex-col gap-y-8 md:gap-y-10 mx-auto p-10 text-black bg-sky-100 rounded-2xl">

                    <div className="w-full text-center">

                        <div className="mb-4 text-black text-3xl md:text-4xl font-extrabold">Subscribe for Exclusive Sales & News</div>

                        <div className="text-base sm:text-lg">Be the first to know about releases and industry news and insights.</div>

                    </div>

                    <div className="w-full">

                        <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">

                            <input type="text" placeholder="Enter your email" className="sm:w-2/4 sm:max-w-[400px] h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow" />

                            <button type="submit" className="sm:w-1/4 sm:max-w-[180px] h-12 text-white bg-purple-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-purple-700">Subscribe</button>

                        </div>

                        <div className="mt-3 text-sm text-center">We care about your data in our <Link to='/' className="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-50">privacy policy</Link>.</div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Subscribe;