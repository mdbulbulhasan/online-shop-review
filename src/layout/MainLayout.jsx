import React, { useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    const [currentPage, setCurrentPage] = useState("home");
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar
          currentPage={currentPage}
          onChangePage={setCurrentPage}
        ></Navbar>
        <main className="min-h-screen">
          <Outlet></Outlet>
        </main>
      </div>
    );
};

export default MainLayout;