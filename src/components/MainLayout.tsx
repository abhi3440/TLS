import React from 'react';
import Navbar from './Navbar'; // Use Navbar instead of Header
import Footer from './Footer';
import { Outlet, Link } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet will render the specific page component */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

// ...inside your map for projects...
<Link
  to={`/project/ecommerce-redesign`} // or use a dynamic slug if available
  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
>
  View Project <ExternalLink size={18} className="ml-2" />
</Link>