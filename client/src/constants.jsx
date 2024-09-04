import { SlidersVertical, ShoppingCart, Users, Bookmark, Package, Tag, Percent, Star, Settings } from 'lucide-react';

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
