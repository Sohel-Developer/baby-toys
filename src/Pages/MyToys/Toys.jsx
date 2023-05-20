import React from 'react';

const Toys = ({ toy }) => {
    const { name, sellerEmail, price, category, rating, picture, quantity } = toy;
    return (
        <tr className='border-b-2 border-gray-600 my-5'>
            <td className="p-3">
                <div className="flex align-items-center">
                    <img className="rounded-full h-12 w-12  object-cover" src={picture} alt="car" />
                    <div className="ml-3">
                        <div className="">{name}</div>
                        <div className="text-gray-500">{sellerEmail}</div>
                    </div>
                </div>
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
            <td className="p-3 ">
                <a href="#" className="text-gray-400 hover:text-gray-900 mr-2">
                    <i className="material-icons-outlined text-base">visibility</i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-400  mx-2">
                    <i className="material-icons-outlined text-base">edit</i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-400  ml-2">
                    <i className="material-icons-round text-base">delete_outline</i>
                </a>
            </td>
        </tr>

    );
};

export default Toys;