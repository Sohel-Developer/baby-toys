import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-screen flex flex-col'>
            <Navbar />
            <div className=' flex-grow'>
                <Outlet />
            </div>
            <Footer />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;