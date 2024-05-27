import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const me = useSelector(state => state.auth.me);
  console.log(me,"this is me")
 

  return (
    <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center">
      <div className="col col-lg-9 col-xl-8">
        <div className="card">
          <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: "#000", height: "200px"}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px"}}>
              <img src={me?.imageUrl}
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: "150px", zIndex: "1"}} />
              <button type="button" className="btn btn-outline-dark text-body" data-mdb-button-init data-mdb-ripple-init style={{zIndex: "1"}}>
                Edit profile
              </button>
            </div>
           
          </div>
          <div className="p-4 text-black bg-body-tertiary">
            <div className="d-flex justify-content-end text-center py-1 text-body">
              <div>
                <p className="mb-1 h5">{me?.role}</p>
                <p className="small text-muted mb-0">Role</p>
              </div>
              
              <div className='mx-3'>
                <p className="mb-1 h5">{me?.email}</p>
                <p className="small text-muted mb-0">Email</p>
              </div>
              <div className='mx-2'>
                <p className="mb-1 h5">{me?.phone}</p>
                <p className="small text-muted mb-0">Phone</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5 text-body">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4 bg-body-tertiary">
                <p className="font-italic mb-1">{me?.aboutMe}</p>
               
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Profile;
