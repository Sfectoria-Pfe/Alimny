import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Chat from "../chat/Chat";
function SessionDetails() {
  const [collapse, setCollapse] = useState(false);
  const { id } = useParams();
  console.log(id, "this is the sessionId");
  const navigate = useNavigate();
  return (
    <div className="p-4 position-relative" >
      <div className="d-flex justify-content-end gap-4">
        <button className="btn btn-success fs-5">+ Add</button>
      </div>
      <Accordion defaultActiveKey={["0"]} className="mt-5" alwaysOpen>
        {[1, 2, 3].map((e, i) => {
          return (
            <div className="mt-4" key={i}>
              <Accordion.Item eventKey={i + ""}>
                <Accordion.Header>Week {e}</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item action>
                      <Accordion
                        defaultActiveKey={["0"]}
                        className="mt-5"
                        alwaysOpen
                      >
                        <div className="mt-4" key={i}>
                          <Accordion.Item eventKey={i + ""}>
                            <Accordion.Header>
                              {" "}
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                alt=""
                                width={50}
                                className="img-fluid rounded-5 mx-3"
                              />
                              JavaScript.pdf
                            </Accordion.Header>
                            <Accordion.Body>
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
                                      paddingRight: "10px",
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
                                      paddingRight: "10px",
                                    }}
                                  ></i>
                                  Introduction.mp4
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                  <i
                                    class="fa-regular fa-file-lines"
                                    style={{
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                  ></i>
                                  Chapitre1.pdf
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                  <i
                                    class="fa-solid fa-video"
                                    style={{
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
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
                                      paddingRight: "10px",
                                    }}
                                  ></i>
                                  Exercice.pdf
                                </ListGroup.Item>
                              </ListGroup>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey={i + 1}>
                            <Accordion.Header>
                              {" "}
                              <img
                                src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg"
                                alt=""
                                width={50}
                                className="img-fluid rounded-5 mx-3"
                              />
                              Css.pdf
                            </Accordion.Header>
                            <Accordion.Body>
                              <ListGroup>
                                <ListGroup.Item action>
                                  <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                                    alt=""
                                    width={50}
                                    className="img-fluid rounded-5 mx-3"
                                  />
                                  Css
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                  <img
                                    src="https://www.easy-micro.org/images/lecons/html/formation-html.jpg"
                                    alt=""
                                    width={50}
                                    className="img-fluid rounded-5 mx-3"
                                  />
                                  Content2.pdf
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                  <img
                                    src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
                                    alt=""
                                    width={50}
                                    className="img-fluid rounded-5 mx-3"
                                  />
                                  Content3.pdf
                                </ListGroup.Item>
                              </ListGroup>
                            </Accordion.Body>
                          </Accordion.Item>
                        </div>
                      </Accordion>
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
      <div className="position-fixed w-md-100 w-50 h-100  top-0"  style={{ right: 0 }}>
        <Chat />
      </div>
    </div>
  );
}

export default SessionDetails;
