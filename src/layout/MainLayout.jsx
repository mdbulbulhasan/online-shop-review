import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <Navbar></Navbar>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;