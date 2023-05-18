import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>


                            </div>

                            <div className="contant_box_404 space-y-1">
                                <h3 className="text-3xl">
                                    Oops! Something went wrong.
                                </h3>
                                <p>We apologize, but an error occurred while processing your request.</p>
                                <p>Please try again later or contact support for assistance.</p>

                                <Link to="/" className="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;