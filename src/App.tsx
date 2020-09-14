import React from "react";

import GlobalStyles from "./styles/global";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import MySchedules from "./pages/MySchedules";

function App() {
  return (
    <>
      <GlobalStyles />
      <MySchedules />
    </>
  );
}

export default App;
