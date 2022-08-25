import React from "react";

import NavScroll from "./components/Navbar.js";
import Home from "./components/Home.js";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavScroll />
      <Home></Home>
    </div>
  );
};

export default App;
