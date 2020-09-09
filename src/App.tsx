import React from "react";

import GlobalStyles from "./styles/global";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyles />
      <SignUp />
    </>
  );
}

export default App;
