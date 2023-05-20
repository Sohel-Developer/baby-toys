import React from 'react';

const Card = ({ toy }) => {
    const { name, picture, rating, price } = toy
    return (
        <div className="card w-96 glass">
            <figure><img src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Ratings: {rating}</p>

                <div className="card-actions ">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;