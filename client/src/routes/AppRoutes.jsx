import { Routes, Route } from 'react-router-dom';

// USER PAGES
import Home from '../pages/Home';

// ADMIN PAGES
import DashboardHome from '../pages/dashboard/Home';

// AUTH PAGES
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// 404 PAGE
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
      {/* USER PAGES */}
			<Route>
        <Route path="/" element={<Home />} />
      </Route>

			{/* DASHBOARD PAGES */}
			<Route path="/dashboard">
        <Route index element={<DashboardHome />} />
      </Route>

			{/* AUTH PAGES */}
      <Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>

      {/* 404 PAGE */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes;