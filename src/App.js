import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

import { useRoutes } from "react-router-dom";
import Routes from "./routes";

import "./App.css";

function App() {

  const Router = useRoutes(Routes)

  return (
    <>
      <SideBar />
      <div className="main">
        <Header />

        {Router}

      </div>
    </>
  );
}

export default App;
