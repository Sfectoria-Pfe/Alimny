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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import course, { getCoursesForSession } from "../../store/course";







const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #6635df",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
};
function SessionDetails() {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(true);
  const me = useSelector((state) => state.auth?.me);
  const weeks = useSelector((state) => state.sessions?.weeks);
const courseContent = useSelector(state=>state.course.sessionCourses)
  const dispatch = useDispatch();
  const roles2 = ["manager", "admin","teacher"];
console.log(weeks,"those are weeks")
console.log(courseContent,"those are course content")
  const { id } = useParams();
  const handleClose = () => setOpen(false);
  useEffect(()=>{
    dispatch(getWeeks(id))
    dispatch(getCoursesForSession(id))
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
       { roles2.includes(me?.role) && <button className="btn btn-success fs-5 rounded-5 " style={{backgroundColor:"#6669D6",height:"45px"}} onClick={()=>setOpen(true)}>
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
      <div>
        <Modal
          keepMounted
          open={open}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer"
              }}
              onClick={handleClose}
            >
              <CloseIcon
                style={{
                  color: "white",
                  backgroundColor: "6635df",
                  borderRadius: "10px",
                  padding: "4px"
                }}
              />
            </Box>

            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", mb: 2 }}
            >
              Add Week
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="Week name"
                 
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>

              <Autocomplete
        multiple
        id="tags-outlined"
        options={["pdf", "video", "quiz", "exercice"]}

        getOptionLabel={(option) => option}
        defaultValue={["pdf"]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
             
            </Box>
            <Button
              sx={{
                mt: 5,
                bgcolor: "#6635DF",
                width: "100%",
                borderRadius: "100px",
                color: "white"
              }}
              variant="contained"
            
            >
              Save
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default SessionDetails;
