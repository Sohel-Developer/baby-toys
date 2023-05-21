import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../useDocumentTitle/useDocumentTitle';
import Toy from './Toy';

const AllToys = () => {
    useDocumentTitle('Baby-Toy | AllToys')


    const [myToys, setMyToys] = useState([])


    const url = `http://localhost:5000/mytoys`

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
                                    <th className="p-3 text-left">Rating</th>
                                    <th className="p-3 text-left">Category</th>
                                    <th className="p-3 text-left">Price</th>
                                    <th className="p-3 text-left">Quantity</th>
                                </tr>
                            </thead>
                            <tbody className='space-y-5' >

                                {
                                    myToys.map(toy => <Toy key={toy._id} toy={toy} ></Toy>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllToys;