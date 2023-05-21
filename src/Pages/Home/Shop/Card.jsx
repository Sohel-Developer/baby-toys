import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ toy }) => {
    const { name, _id, picture, rating, price } = toy
    return (
        <div className="card  glass">
            <figure><img className='' src={picture} alt="car!" /></figure>
            <div className="  card-body ">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {rating}</p>

                <div className="card-actions ">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Card;