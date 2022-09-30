//modulo
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Moleculas(components)
import Order from "../components/Order";

//Organismos(containers)
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import SendEmail from "../pages/SendEmail";

//paginas(page)
import Home from "../pages/Home";
import NotFount from "../pages/NotFound";
import NewPassword from "../pages/NewPassword";
import CreateAccount from "../pages/CreateAccount";
import Orders from "../pages/Orders";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";
import RecoveryPassword from "../pages/PasswordRecovery";

//context
import AppContext from "@context/AppContext";

//style
import "../styles/global.css";

//hooks
import useInitialState from "../hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="/order" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
