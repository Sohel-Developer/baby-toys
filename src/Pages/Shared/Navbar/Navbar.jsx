import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.email ? <>
                <li><Link to='/add'>Add Toy</Link></li>
                <li><Link to='/mytoys'>My Toys</Link></li>
            </> : <>
                <li><Link to='/login'>login</Link></li>

            </>
        }
    </>



    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast.success('Successfully🤟 LogOut !')
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                        {menuItems}
                    </ul>


                </div>
                <div>

                    <Link to="/" className=" flex items-center font-bold text-xl">
                        <img className='w-20' src="https://i.ibb.co/DgmbZPW/Baby-shop-toy-shop-and-baby-product-logo-Graphics-12942644-1-580x386.png" alt="Logo" />
                        Baby Toys</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>

            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ? <img src={user.photoURL} /> : <img src="https://t3.ftcdn.net/jpg/05/17/79/88/240_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" alt="Profile" />
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user?.email && <>
                                <li>
                                    <span className="justify-between">
                                        {user?.displayName}
                                    </span>
                                </li>
                                <li>
                                    <span className="justify-between">
                                        {user?.email}
                                    </span>
                                </li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </>

                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;