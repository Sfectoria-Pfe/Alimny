import React, { useEffect } from 'react';
import Course from './SessionCard'; // Assure-toi d'importer correctement le composant de cours
import {useDispatch,useSelector} from "react-redux"
import { fetchsessions, fetchSessionsStudents, fetchSessionsTeachers } from '../store/sessions';
import { useNavigate } from 'react-router-dom';
const CoursesPage = () => {
  const me = useSelector(state=>state?.auth?.me)
 const sessions = useSelector(state=>state?.sessions?.sessions?.items)
 const dispatch = useDispatch()
console.log(sessions, "those are courses")
useEffect(()=>{
  
 me?.role === "student"? dispatch(fetchSessionsStudents(me?.id)): me?.role==="teacher"? dispatch(fetchSessionsTeachers(me?.id)):dispatch(fetchsessions())

},[dispatch])
const navigate = useNavigate()
  return (
    <div className="courses-page">
      <h1>All Sessions</h1>
      <div className="course-list d-flex gap-5">

        {sessions.map((course, index) => (
          // Ajoute une classe CSS pour chaque ligne de trois cartes
          <div key={index} className={index % 3 === 0 ? "course-row" : ""} onClick={()=>navigate(`${course.id}`)}>
            <Course
              key={course.id}
              title={course.name}
              description={course.description}
              image={course.imageUrl}
              active={course.active}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
