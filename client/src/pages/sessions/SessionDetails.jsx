import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Chat from "../chat/Chat";
import Lottie from "react-lottie";
import chat from "../../assets/lotties/chat.json";
import zoominy from "../../assets/lotties/videoConf.json"
import { useDispatch, useSelector } from "react-redux";
import { getWeeks } from "../../store/sessions";
function SessionDetails() {
  const [toggle, setToggle] = useState(true);
  const me = useSelector((state) => state.auth?.me);
  const weeks = useSelector((state) => state.sessions?.weeks);
  const dispatch = useDispatch();
  const roles2 = ["manager", "admin","teacher"];
console.log(weeks,"those are weeks")

  const { id } = useParams();


  useEffect(()=>{
    dispatch(getWeeks(id))
  },[id])

  console.log(id, "this is the sessionId");
  const navigate = useNavigate();
  return (
    <div className="p-4 position-relative">
      <div
        className={`d-flex align-items-center ${
          toggle ? "justify-content-end" : "justify-content-start"
        } gap-3`}
      >
      <div className="d-flex gap-3"> 
       { roles2.includes(me?.role) && <button className="btn btn-success fs-5 rounded-5 " style={{backgroundColor:"#6669D6",height:"45px"}}>
          + Add Week
          </button>}
          <button className="btn btn-success fs-5 rounded-5" style={{backgroundColor:"#6669D6",height:"45px"}} onClick={() => navigate("students")}>Students</button>
          <button className="btn btn-success fs-5 rounded-5" style={{backgroundColor:"#6669D6",height:"45px"}} onClick={() => navigate("teachers")}>Teachers</button>
          </div>
        <button className="btn btn-lightfs-5"  onClick={() => window.open("https://meet.google.com/hqk-tcom-owb")}>
          
       
          <Lottie

          options={{
            loop: false,
        
            autoplay: true,
            animationData: zoominy,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          
          height={70}
          width={70}
          style={{  }}
        />
    
        </button>
      </div>
      <div className={` ${toggle ? "w-100" : "w-75"}`}>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          style={{ paddingRight: "75px" }}
        >
          {weeks.map((e, i) => {
            return (
              <div className="mt-4" key={i}>
                <Accordion.Item eventKey={i + ""}>
                  <Accordion.Header>{e.name}</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {e.weekcontent?.map((e,i)=>{
                        return (
                          <div className="mt-4" key={i}>
                <ListGroup.Item
                  action
                  onClick={() => window.open(e?.CourseContent?.path, "mozillaTab")}
                >
                  <div className="d-flex justify-content-between">
                  <div>
                  <i

                    className={`${
                      e?.type === "pdf"
                        ? "fa-regular fa-file-lines"
                        : "fa-solid fa-video"
                    }`}
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px"
                    }}
                  >

                  </i>
                  {e?.CourseContent?.name}
                  </div>
                 
                    </div>
                </ListGroup.Item>
              </div>
                        )
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            );
          })}
        </Accordion>
        <div onClick={() => setToggle(!toggle) }>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: chat,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          
          height={75}
          width={75}
          style={{ marginTop: "-10px",position:"fixed",bottom:0,zIndex:999,right:toggle?10:480 }}
        />
        </div>
      </div>
      <div
        className="position-fixed w-md-100 w-25 h-100  top-0 "
        style={{ right: 0, display: toggle ? "none" : "" }}
      >
        <Chat id ={id } />
      </div>
    </div>
  );
}

export default SessionDetails;
