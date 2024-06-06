import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../store/course";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Lottie from 'react-lottie';
function CourseDetails() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  console.log(course);

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch]);
  console.log(courseId);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-between gap-3 w-100">
          <h2 className="w-100">{course?.name}</h2>
          <button className="btn btn-success">Add</button>
          <button className="btn btn-warning">Update</button>
        </div>
        <img
          src={
            course?.imageUrl
              ? course.imageUrl
              : "https://img.freepik.com/free-vector/realistic-background-futuristic-style_23-2149129125.jpg"
          }
          alt="image"
          loading="lazy"
          className="img-fluid"
        />
      </div>
      <Accordion 
          defaultActiveKey={["0"]}
          alwaysOpen
          style={{ paddingRight: "75px" }}
        >
          {[1, 2, 3].map((e, i) => {
            return (
              <div className="mt-4" key={i}>
                <ListGroup>
                                  <ListGroup.Item
                                    action
                                    onClick={() =>
                                      navigate("/mysessions/pdf-content")
                                    }
                                  >
                                    <i
                                      class="fa-regular fa-file-lines"
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    Introduction.pdf
                                  </ListGroup.Item>
                                  <ListGroup.Item
                                    action
                                    onClick={() =>
                                      navigate("/mysessions/video-content")
                                    }
                                  >
                                    <i
                                      class="fa-solid fa-video"
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    Introduction.mp4
                                  </ListGroup.Item>
                                  <ListGroup.Item action>
                                    <i
                                      class="fa-regular fa-file-lines"
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    Chapitre1.pdf
                                  </ListGroup.Item>
                                  <ListGroup.Item action>
                                    <i
                                      class="fa-solid fa-video"
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    Chapitre1.mp4
                                  </ListGroup.Item>
                                  <ListGroup.Item
                                    action
                                    onClick={() =>
                                      navigate("/mysessions/exercice-content")
                                    }
                                  >
                                    <i
                                      class="fa-regular fa-file-lines"
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    Exercice.pdf
                                  </ListGroup.Item>
                                </ListGroup>
              </div>
            );
          })}
        </Accordion>
    </div>
  );
}

export default CourseDetails;
