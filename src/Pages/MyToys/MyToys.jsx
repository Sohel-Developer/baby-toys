import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Toys from './Toys';
import { toast } from 'react-hot-toast';

const MyToys = () => {

    const [myToys, setMyToys] = useState([])

    const { user } = useContext(AuthContext)

    const url = `https://baby-toy-server.vercel.app/mytoys?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const deleteHandler = (id) => {
        const url = `https://baby-toy-server.vercel.app/mytoys/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                toast.success('  Successfully🤟 Deleted !')

                const remaning = myToys.filter(toy => toy._id !== id)
                setMyToys(remaning)



            })
    }


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
                                    myToys.map(toy => <Toys key={toy._id} deleteHandler={deleteHandler} toy={toy} ></Toys>)
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