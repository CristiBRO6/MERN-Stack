import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../components/Navbar';
import useResponsive from '../hooks/useResponsive';

import Drawer from '../components/ui/Drawer';
import SidebarItem from '../components/ui/SidebarItem';

import { House, User, LogIn, SlidersVertical } from 'lucide-react';

const Items = [
  { id: 1, path: "/", name: "Home", icon: House },
  { id: 2, path: "/profile", name: "Profile", icon: User },
  { id: 3, path: "/dashboard", name: "Dashboard", icon: SlidersVertical },
  { id: 4, path: "/login", name: "Login", icon: LogIn },
];

const Layout = () => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <div className="flex h-screen overflow-hidden">

      <main className={`flex flex-col flex-1 w-full overflow-hidden`}>
        {/* NAVBAR */}
        <Navbar openDrawer={openDrawer} />

        {/* CONTENT */}
        <div className="flex-1 p-4 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </div>

        {/* FOOTER */}
      </main>

      {screenSizeIndex == 0 && (
        <>
          {/* DRAWER */}
          <Drawer title="Menu" drawerOpen={drawerOpen} closeDrawer={closeDrawer}>
            <div className="h-full flex flex-col gap-2 overflow-y-auto">
              {Items.map((item) => <SidebarItem key={item.id} item={item} onClick={closeDrawer} /> )}
            </div>
          </Drawer>
        </>
      )}
    </div>
  );
};

export default Layout;
