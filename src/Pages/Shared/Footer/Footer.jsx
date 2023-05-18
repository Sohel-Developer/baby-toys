import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-1  py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 className="text-xl font-bold mb-6">Other Pages</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <Link to="about" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="blog" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Blog</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="all" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">All Toys</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="contact" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Page</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 className="text-xl font-bold mb-6">Toys Car</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Bus</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Truck</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Trin</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Ambulance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">About</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 className="text-xl font-bold mb-6">Help</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 mt-4 sm:w-1/3 xl:w-2/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Store Information.</h5>
                        <div className="w-full">
                            <p>2005 Your Address Goes Here.
                                <br />
                                896, Address 10010, HGJ</p>
                            <p>Phone/Fax: 0123456789</p>
                            <p>Email: demo@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;