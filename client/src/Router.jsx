import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./apps/App";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";

import Profile from "./pages/Profile";
import Auth from "./apps/Auth";
import Signup from "./components/Signup";
import Programme from "./pages/programmes/Programme";
import Session from "./pages/Session";
import Mysessions from "./pages/Mysessions";
import LandingPage from "./pages/LandigPage";

import EditProfile from "./pages/EditProfile";
import ProgrammeList from "./pages/programmes/ProgrammeList";
import ProgrammeDetail from "./pages/programmes/ProgrammeDetail";
import AddProgramme from "./pages/programmes/AddProgramme";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./store/auth";
import Chat from "./pages/chat/Chat";
import Agenda from "./pages/agenda/Agenda";
import UserPage from "./pages/user/view/user-view";
import ModulePage from "./pages/module/ModulePage";
import Users from "./pages/Users";
import ProductsView from "./pages/products/view/products-view";

function Router() {
  const user = useSelector((state) => state.auth?.me);
  const dispatch = useDispatch();
const  token =  localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(me());
      }
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="help" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="programme" element={<Programme />}>
              <Route index element={<ProgrammeList />} />
              <Route path="addProgramme" element={<AddProgramme />} />
              <Route path="programmeDetail/:id" element={<ProgrammeDetail />} />
            </Route>
            <Route path="module" element={<ModulePage />} />
            <Route path="session" element={<Session />} />
            <Route path="users" element={<Users />} />
            <Route path="mysessions" element={<Mysessions />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
