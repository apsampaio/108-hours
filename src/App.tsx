import React from "react";

import GlobalStyles from "./styles/global";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
