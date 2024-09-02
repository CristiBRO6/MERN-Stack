import { Outlet } from 'react-router-dom';
import Navbar from '../components/DashboardNavbar';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </>
);
}

export default DashboardLayout;
