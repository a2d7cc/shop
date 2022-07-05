import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import Device from "../pages/Device";
import Layout from "../pages/Layout/Layout";
import ProtectedRoutes from "../utils/react/ProtectedRoutes";
import NotFound from "../pages/NotFound";
import { useContext } from "react";
import { Context } from "..";

const AppRouter = () => {
  const {user} = useContext(Context);


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index  element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="device/:id" element={<Device />} />
        <Route element={<ProtectedRoutes isAllowed={user.isAuth} />}>
          <Route path="admin" element={<Admin />} />
          <Route path="basket" element={<Basket />} />
        </Route>
        <Route
          element={<ProtectedRoutes isAllowed={!user.isAuth} redirectPath="/shop" />}
        >
          <Route path="login" element={<Auth />} />
          <Route path="registration" element={<Auth />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
