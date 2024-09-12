import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Sidebar from '../components/DashboardSidebar';
import Navbar from '../components/DashboardNavbar';
import useResponsive from '../hooks/useResponsive';

import Drawer from '../components/ui/Drawer';
import SidebarItem from '../components/ui/SidebarItem';

import { SIDEBAR_ITEMS, DASHBOARD_PROFILE_ITEMS } from '../constants';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/Avatar';
import { Dropdown, DropdownBody, DropdownItem, DropdownMenu, DropdownSeparator, DropdownToggle } from '../components/ui/Dropdown';
import { EllipsisVertical } from 'lucide-react';

const DashboardLayout = () => {
  const screenSizeIndex = useResponsive([768, 1024, 1280]);
  const [sidebarOpen, setSidebarOpen] = useState(screenSizeIndex > 0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  useEffect(() => {
    setSidebarOpen(screenSizeIndex > 0);
  }, [screenSizeIndex]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar className={`${sidebarOpen ? "" : "hidden"}`} />

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
            <div className="h-full flex flex-col justify-between">
              <div className="h-full flex flex-col gap-2">
                {SIDEBAR_ITEMS.map((item) => (
                  <SidebarItem key={item.id} item={item} onClick={closeDrawer} />
                ))}
              </div>
              <div className="w-full flex items-center justify-between pt-3 border-t">
                <div className="w-full flex items-center gap-2">
                  <Avatar className="rounded-md size-9">
                    <AvatarImage src="http://cristibro.epizy.com/phone_store/avatar/614dcb8130063b69cbe83aa018dfb0c6.png?v=1726162528" alt="CristiBRO" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-base leading-none">CristiBRO</span>
                    <span className="text-sm text-gray-800 leading-none">cristibro@gmail.com</span>
                  </div>
                </div>
                <Dropdown placement="top">
                  <DropdownToggle>
                    <div className="p-1 cursor-pointer">
                      <EllipsisVertical className="size-4" />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="p-1">
                    <DropdownBody className="gap-1 pt-1">
                      {DASHBOARD_PROFILE_ITEMS.map((item) => 
                        item.type === 'item' ? (
                          <DropdownItem 
                            key={item.id} 
                            item={item}
                            onClick={closeDrawer}
                            closeable 
                          />
                        ) : item.type === 'separator' ? (
                          <DropdownSeparator key={item.id} />
                        ) : null
                      )}
                    </DropdownBody>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </Drawer>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
