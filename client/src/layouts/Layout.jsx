import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
