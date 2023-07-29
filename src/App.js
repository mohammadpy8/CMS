import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Products from "./components/Products/Products";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Offs from "./components/Offs/Offs";

import "./App.css";

function App() {
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
