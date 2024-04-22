import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrStCiO2IfbiUQlP_BHs7vt7rnZirDbzOPw255QdplCw&s',
    firstName: 'Malek',
    lastName: 'Fridhi',
    role: 'Student',
    birthDate: '02/09/2002',
    email: 'malek.fridhi02@gmail.com'
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img src={user.photo} alt="Photo de profil" className="profile-picture" />
        <div className="profile-info">
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.role}</p>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-item">
          <strong></strong> {user.birthDate}
        </div>
        <div className="profile-item">
          <strong></strong> {user.email}
        </div>
      </div>
    </div>
  );
};

export default Profile;
