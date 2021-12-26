import { Route, Switch } from "react-router-dom";
import Products from "../components/products";
import EditCategory from '../components/categories/EditCategory'
import Categories from '../components/categories'
// import EditProduct from '../components/products/EditProduct'
// import Orders from '../components/orders/Orders'
// import OrderDetails from '../components/orders/OrderDetails'
// import Payments from '../components/payments/Payments'
// import NewCoupon from '../components/coupons/NewCoupon'
// import Coupons from '../components/coupons/Coupons'
// import Shipments from '../components/shipments/Shipments'
// import Users from '../components/users/Users'
// import Comments from '../components/comments/Comments'
// import Settings from '../components/settings/Settings'
// import NewSetting from '../components/settings/NewSetting'

interface RouteItem {
  path: string;
  Component: any;
}

const routes: RouteItem[] = [
  //   {
  //     path: '/settings',
  //     component: Settings
  //   },
  //   {
  //     path: '/settings/new',
  //     component: NewSetting
  //   },
  //   {
  //     path: '/comments',
  //     component: Comments
  //   },
  //   {
  //     path: '/users',
  //     component: Users
  //   },
  {
    path: "/products",
    Component: Products,
  },
    {
      path: '/categories/edit',
      Component: EditCategory
    },
    {
      path: '/categories',
      Component: Categories
    },
  //   {
  //     path: '/products/edit',
  //     component: EditProduct
  //   },
  //   {
  //     path: '/orders',
  //     component: Orders
  //   },
  //   {
  //     path: '/orders/:orderID',
  //     component: OrderDetails
  //   },
  //   {
  //     path: '/payments',
  //     component: Payments
  //   },
  //   {
  //     path: '/coupons',
  //     component: Coupons
  //   },
  //   {
  //     path: '/coupons/new',
  //     component: NewCoupon
  //   },
  //   {
  //     path: '/shipments',
  //     component: Shipments
  //   }
];
const RenderRoutes = () => {
  return (
    <Switch>
      {routes.map((route: RouteItem, i) => (
        <Route exact key={i} path={route.path}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  );
};
export default RenderRoutes;
