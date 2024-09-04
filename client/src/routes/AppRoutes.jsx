import { Routes, Route } from 'react-router-dom';

// LAYOUTS
import Layout from '../layouts/Layout';
import DashboardLayout from '../layouts/DashboardLayout';

// USER PAGES
import Home from '../pages/Home';

// ADMIN PAGES
import DashboardHome from '../pages/dashboard/Home';
import Users from '../pages/dashboard/Users';

// AUTH PAGES
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// 404 PAGE
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
      {/* USER PAGES */}
			<Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

			{/* DASHBOARD PAGES */}
			<Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<Users />} />
      </Route>

			{/* AUTH PAGES */}
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Route>

      {/* 404 PAGE */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes;