import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./apps/App";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

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
import SessionDetails from "./pages/sessions/SessionDetails";
import SessionList from "./pages/sessions/SessionList";
import PdfContent from "./pages/sessions/PdfContent";
import VideoContent from "./pages/sessions/VideoContent";
import PdfExercice from "./pages/sessions/PdfExercice";
import Courses from "./pages/Course/Courses";
import CourseDetails from "./pages/Course/CourseDetails";
import ModuleDetails from "./pages/module/ModuleDetails";
import CategoryList from "./pages/category/CategoryList";
import SessionStudents from "./pages/sessions/SessionStudents";
import SessionTeachers from "./pages/sessions/SessionTeachers";
import SessionDetailsList from "./pages/sessions/SessionDetailsList";

function Router() {
  const user = useSelector((state) => state.auth?.me);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const roles2 = ["manager", "admin"];

  console.log(user, "this is user");
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
            {roles2.includes(user?.role) && (
              <>
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:courseId" element={<CourseDetails />} />
                <Route path="programme" element={<Programme />}>
                  <Route index element={<ProgrammeList />} />
                  <Route path="addProgramme" element={<AddProgramme />} />
                  <Route path=":programmeId" element={<ProgrammeDetail />} />
                </Route>
                <Route path="module" element={<ModulePage />} />
                <Route path="module/:moduleId" element={<ModuleDetails />} />
                <Route path="session" element={<Session />} />
                <Route path="users" element={<Users />} />
                <Route path="category" element={<CategoryList />} />
                <Route path="profile" element={<Profile />} />{" "}
              </>
            )}
            {/*only admin and manager could see it  */}

            {/* <Route path="users/:userId" element={<User />} /> */}
            <Route index element={<Dashboard />} />
            <Route path="agenda" element={<Agenda />} />

            <Route path="mysessions" element={<SessionList />}>
              <Route index element={<Mysessions />} />
              
              <Route path=":id" element={<SessionDetailsList />} >
              <Route index element ={<SessionDetails />} />
              <Route path="students" element={<SessionStudents />} />
              <Route path="teachers" element={<SessionTeachers />} />
              </Route>
              <Route path="pdf-content" element={<PdfContent />} />
              <Route path="video-content" element={<VideoContent />} />
              <Route path="exercice-content" element={<PdfExercice />} />
             
            </Route>
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="edit" element={<EditProfile />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        ) : (
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
