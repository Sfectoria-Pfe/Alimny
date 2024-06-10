import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCourseContent, getCourse } from "../../store/course";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
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
function CourseDetails() {
  const { courseId } = useParams();
  const course = useSelector((state) => state.course.course);
  const [open, setOpen] = useState(false);
  const [addedContent, setAddedContent] = useState({});
  const [file, setFile] = useState("");
  const [update, setUpdate] = useState(false);

  console.log(addedContent, "this is added content");

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleAdd = async () => {
    let aux = { ...addedContent, courseId: +courseId };
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData
      );
      aux = { ...aux, path: response.data.path };
      dispatch(addCourseContent(aux)).then((res) => {
        setOpen(false);
        setUpdate(!update)
      });
    }
  };

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, [dispatch,update]);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-between gap-3 w-100">
          <h2 className="w-100">{course?.name}</h2>
          <button
            className="btn btn-success"
            onClick={() => setOpen(true)}
            style={{ backgroundColor: "#6635df" }}
          >
            Add
          </button>
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
        <ListGroup>
          {course?.coursecontent?.map((e, i) => {
            return (
              <div className="mt-4" key={i}>
                <ListGroup.Item
                  action
                  onClick={() => window.open(e?.path, "mozillaTab")}
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
                  {e?.name}
                  </div>
                  <div className="d-flex gap-3">
                  {<DeleteIcon />}
                    {<ModeEditIcon />}</div>
                    </div>
                </ListGroup.Item>
              </div>
            );
          })}
        </ListGroup>
      </Accordion>
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
              Add Content
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  id="outlined-basic"
                  label="name"
                  onChange={(e) => {
                    setAddedContent((prev) => {
                      return { ...prev, name: e.target.value };
                    });
                  }}
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>

              <Autocomplete
                fullWidth
                onChange={(e, v) => {
                  setAddedContent((prev) => {
                    return { ...prev, type: v };
                  });
                }}
                id="tags-outlined"
                options={["pdf", "video", "quiz", "exercice"]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField {...params} label="types" placeholder="types" />
                )}
              />
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
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
              onClick={handleAdd}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default CourseDetails;
