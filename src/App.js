import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./App.css";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <SideBar />
      <div className="main">
        <Header />

        {router}

      </div> 
    </>
  );
}

export default App;
