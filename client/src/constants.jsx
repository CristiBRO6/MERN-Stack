import { SlidersVertical, ShoppingCart, Users, Bookmark, Package, Tag, Percent, Star, Settings, House, User, LogOut } from 'lucide-react';

export const ROLES = [
  { id: 0, name: "User" },
  { id: 1, name: "Admin" },
  { id: 2, name: "Owner" },
]

export const SIDEBAR_ITEMS = [
  { id: 1, path: "/dashboard/", name: "Dashboard", icon: SlidersVertical },
  { id: 2, path: "/dashboard/orders", name: "Orders", icon: ShoppingCart },
  { id: 3, path: "/dashboard/users", name: "Users", icon: Users },
  { id: 4, path: "/dashboard/categories", name: "Categories", icon: Bookmark },
  { id: 5, path: "/dashboard/products", name: "Products", icon: Package },
  { id: 6, path: "/dashboard/coupons", name: "Coupons", icon: Tag },
  { id: 7, path: "/dashboard/discounts", name: "Discounts", icon: Percent },
  { id: 8, path: "/dashboard/reviews", name: "Reviews", icon: Star },
  { id: 9, path: "/dashboard/settings", name: "Settings", icon: Settings }
];

export const DASHBOARD_PROFILE_ITEMS = [
  { id: 1, type: "item", path: "/", name: "Home", icon: House },
  { id: 2, type: "item", path: "/profile", name: "Profile", icon: User },
  { id: 3, type: "item", path: "/dashboard/settings", name: "Settigns", icon: Settings },
  { id: 4, type: "group", path: "/dashboard/settings", name: "Settigns", icon: Settings, children: [
    { id: 1, type: "item",name: "Light" },
    { id: 2, type: "item",name: "Dark" },
    { id: 3, type: "separator" },
    { id: 4, type: "item",name: "System" },
  ] },
  { id: 5, type: "separator" },
  { id: 6, type: "item", path: "/logout", name: "Logout", icon: LogOut, danger: true },
];
