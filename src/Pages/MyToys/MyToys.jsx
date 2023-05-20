import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Toys from './Toys';

const MyToys = () => {

    const [myToys, setMyToys] = useState([])

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/mytoys?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])


    return (
        <div>
            <div className="flex mt-10 justify-center min-h-screen">
                <div className=" w-4/5 mx-auto">
                    <div className="overflow-auto  lg:overflow-visible ">
                        <table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
                            <thead className=" text-gray-500">
                                <tr>
                                    <th className="p-3">Toy Cars</th>
                                    <th className="p-3 text-left">Category</th>
                                    <th className="p-3 text-left">Price</th>
                                    <th className="p-3 text-left">Quantity</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className='space-y-5' >

                                {
                                    myToys.map(toy => <Toys key={toy._id} toy={toy} ></Toys>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyToys;