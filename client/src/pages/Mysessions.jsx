import React from 'react';
import Course from './SessionCard'; // Assure-toi d'importer correctement le composant de cours

const CoursesPage = () => {
  // Exemple de données de cours (tu peux remplacer cela par des données réelles depuis une API ou une base de données)
  const courses = [
    {
      id: 1,
      title: 'Course 1',
      description: 'Description of course 1.',
      image: 'https://miro.medium.com/max/870/1*1dkUNOPVLoks_RVf-5pEsA.png',
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description of course 2.',
      image: 'https://th.bing.com/th/id/R.73b1b219ce647b39837623fc0cc07acf?rik=Wf90DuwIEhDPvQ&pid=ImgRaw&r=0',
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Description of course 2.',
      image: 'https://th.bing.com/th/id/R.ae3621118e38a1f38a784f93c5263809?rik=MC7G4HjrxhqwHg&pid=ImgRaw&r=0',
    },
    {
      id: 4,
      title: 'Course 4',
      description: 'Description of course 2.',
      image: 'https://theawesomer.com/photos/2017/06/learn_mobile_development_1.jpg',
    },
    // Ajoute d'autres cours ici
  ];

  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      <div className="course-list d-flex gap-5">

        {courses.map((course, index) => (
          // Ajoute une classe CSS pour chaque ligne de trois cartes
          <div key={index} className={index % 3 === 0 ? "course-row" : ""}>
            <Course
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
