import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourse } from "../../store/course";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

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
        ><ListGroup>
          {course?.coursecontent?.map((e, i) => {
            return (
              <div className="mt-4" key={i}>
                
                                  <ListGroup.Item
                                    action
                                    onClick={() =>
                                      window.open(e?.path, "mozillaTab")
                                    }
                                  >
                                    <i
                                      className={`${e?.type === "pdf" ? "fa-regular fa-file-lines" : "fa-solid fa-video"}`}
                                      style={{
                                        paddingLeft: "10px",
                                        paddingRight: "10px"
                                      }}
                                    ></i>
                                    {e?.name}
                                  </ListGroup.Item>
                                 
                              
                                
              </div>
            );
          })}
          </ListGroup>
        </Accordion>
    </div>
  );
}

export default CourseDetails;
