import React from 'react';

const Toy = ({ toy }) => {
    const { name, sellerEmail, price, category, rating, picture, quantity } = toy;
    return (
        <tr className='border-b-2 border-gray-600 my-5'>
            <td className="p-3">
                <div className="flex align-items-center">
                    <img className="rounded-full  w-20  object-cover" src={picture} alt="car" />
                    <div className="ml-3">
                        <div className="">{name}</div>
                        <div className="text-gray-500">{sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td className="p-3">
                {rating}
            </td>
            <td className="p-3">
                {category}
            </td>
            <td className="p-3 font-bold">
                $ {price}
            </td>
            <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2">{quantity}</span>
            </td>
        </tr>

    );
};

export default Toy;