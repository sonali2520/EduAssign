import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Singin";
import CreateAccount from "./components/CreateAccount";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
