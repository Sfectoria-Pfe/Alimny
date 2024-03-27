import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
            <Route index element={<Login/>} />
            <Route path="second" element={<SignIn/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
