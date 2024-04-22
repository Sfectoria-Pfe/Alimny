import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./apps/App";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Agenda from "./pages/Agenda";
import Help from "./pages/Help";
import Profile from "./pages/Profile";
import avatar from "./assets/image/avatar.png";
import Auth from "./apps/Auth";
import Signup from "./components/Signup";
import Programme from "./pages/Programme";
import Module from "./pages/Module";
import Session from "./pages/Session";
import Users from "./pages/Users";
import Mysessions from "./pages/Mysessions";
import LandingPage from "./pages/LandigPage";

import EditProfile from "./pages/EditProfile";

function Router() {
  const [user, setUser] = useState({
    email: "String",
    fullName: "String",
    phone: "String",
    address: "String",
    isStudent: true,
    role: "student",
    avatarURL: avatar,
  });
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App user={user} setUser={setUser} />}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="help" element={<Help />} />
            <Route path="profile" element={<Profile />} />
            <Route path="programme" element={<Programme />} />
            <Route path="module" element={<Module />} />
            <Route path="session" element={<Session />} />
            <Route path="users" element={<Users />} />
            <Route path="mysessions" element={<Mysessions />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="edit" element={<EditProfile />} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login setUser={setUser} />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
