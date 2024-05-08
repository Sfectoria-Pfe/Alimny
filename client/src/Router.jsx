import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./apps/App";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";

import Help from "./pages/Help";
import Profile from "./pages/Profile";
import avatar from "./assets/image/avatar.png";
import Auth from "./apps/Auth";
import Signup from "./components/Signup";
import Programme from "./pages/programmes/Programme";
import Module from "./pages/Module";
import Session from "./pages/Session";
import Users from "./pages/Users";
import Mysessions from "./pages/Mysessions";
import LandingPage from "./pages/LandigPage";
import programme from "./pages/programmes/Programme"

import EditProfile from "./pages/EditProfile";
import ProgrammeList from "./pages/programmes/ProgrammeList";
import ProgrammeDetail from "./pages/programmes/ProgrammeDetail";
import AddProgramme from "./pages/programmes/AddProgramme";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store/auth";
import Chat from "./pages/chat/Chat";
import Agenda from "./pages/agenda/Agenda";
import UserPage from "./pages/user/view/user-view";

function Router() {
 
  const user = useSelector((state) => state.auth?.me);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        dispatch(me());
      }
    })();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App/>}>
            <Route path="*" element={<Navigate to="/"/>} />
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="help" element={<Chat/>} />
            <Route path="profile" element={<Profile />} />
            <Route path="programme" element={<Programme />} >
            <Route index element={<ProgrammeList />} />
            <Route path="addProgramme" element={<AddProgramme />} />
            <Route path="programmeDetail/:id" element={<ProgrammeDetail />} />
   
            </Route>
            <Route path="module" element={<Module />} />
            <Route path="session" element={<Session />} />
            <Route path="users" element={<UserPage />} />
            <Route path="mysessions" element={<Mysessions />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="edit" element={<EditProfile />} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route path="*" element={<Navigate to="/"/>} />
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
