import React from 'react';
import Navbar from '../components/Navbarr';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function switch_page() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default switch_page