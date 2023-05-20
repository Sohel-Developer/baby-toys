import React, { useEffect, useState } from 'react';

const Details = () => {

    const [toy, setToy] = useState({})

    const url = ``

    useEffect(() => {
        fetch()
    }, [])


    const { picture, name, rating, price, description } = toy;
    return (
        <div>
            <div className=" flex items-center glass">
                <figure><img src={picture && picture} alt="car!" /></figure>
                <div className=" space-y-5">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Ratings: {rating}</p>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default Details;