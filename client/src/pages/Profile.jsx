import React, { useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUser } from "../store/auth";

const Profile = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    if (Object.keys(form).length) {
      let auxUser = { ...user };
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        const response = await axios.post(
          "http://localhost:3000/upload",
          formData
        );
        auxUser = { ...auxUser, imageUrl: response.data.path, id: me?.id };
      }
      dispatch(updateUser(auxUser)).then((res) => setClicked(!clicked));
    } else {
      setClicked(!clicked);
    }
  };
  console.log(form, "this is the form");
  const me = useSelector((state) => state.auth.me);
  console.log(me, "this is me");

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center">
          <div className="col col-lg-9 col-xl-8">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  {clicked && (
                    <input
                      className="form-control form-control-sm"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  )}
                  <img
                    src={form.imageUrl ? form.imageUrl : me?.imageUrl}
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: "1" }}
                  />

                  {!clicked ? (
                    <button
                      onClick={() => setClicked(!clicked)}
                      type="button"
                      className="btn btn-outline-dark "
                      data-mdb-button-init
                      data-mdb-ripple-init
                      style={{ zIndex: "1" }}
                    >
                      Edit profile
                    </button>
                  ) : (
                    <button
                    onClick={handleUpdate}
                      type="button"
                      className="btn btn-outline-success "
                      data-mdb-button-init
                      data-mdb-ripple-init
                      style={{ zIndex: "1" }}
                    >
                      Save
                    </button>
                  )}
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  {!clicked ? (
                    <h5>{me?.fullName}</h5>
                  ) : (
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder={me?.fullName}
                      name="fullName"
                      className="form-control"
                    />
                  )}
                </div>
              </div>
              <div className="p-4 text-black bg-body-tertiary">
                <div className="d-flex justify-content-end text-center py-1 text-body">
                  <div>
                    <p className="mb-1 h5">{me?.role}</p>
                    <p className="small text-muted mb-0">Role</p>
                  </div>

                  <div className="mx-3">
                    <p className="mb-1 h5">{me?.email}</p>
                    {!clicked ? (
                      <p className="small text-muted mb-0">Email</p>
                    ) : (
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        placeholder={me?.email}
                        className="form-control"
                      />
                    )}
                  </div>
                  <div className="mx-2">
                    <p className="mb-1 h5">{me?.phone}</p>
                    {!clicked ? (
                      <p className="small text-muted mb-0">Phone</p>
                    ) : (
                      <input
                        type="text"
                        onChange={handleChange}
                        name="phone"
                        placeholder={me?.phone}
                        className="form-control"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="mb-5 text-body">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4 bg-body-tertiary">
                    {!clicked ? (
                      <p className="font-italic mb-1">{me?.aboutMe}</p>
                    ) : (
                      <input
                        type="text"
                        name="aboutMe"
                        onChange={handleChange}
                        placeholder={me?.aboutMe}
                        className="form-control"
                      />
                    )}
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
