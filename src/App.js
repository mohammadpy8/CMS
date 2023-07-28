import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
      </div>
    </>
  );
}

export default App;
