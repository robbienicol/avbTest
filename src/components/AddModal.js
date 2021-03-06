import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//would typically like CSS to be handled in a differnt file, but the docs insisted this is the correct way to go about it in MUI
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddModal({
  showModal,
  setShowModal,
  comments,
  setComments,
}) {
  const [nameInput, setNameInput] = React.useState("");
  const [commentInput, setCommentInput] = React.useState("");
  const HandleClose = () => setShowModal(false);
  //spreading through the array and then adding a new object based on the inputs
  const AddUser = () => {
    setComments([
      { id: comments.length + 1, name: nameInput, comment: commentInput },
      ...comments,
    ]);
  };

  return (
    <div>
      <Modal open={showModal} onClose={HandleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Comment
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              id="outlined-basic"
              label="Add Name"
              onChange={(e) => setNameInput(e.target.value)}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Add Comment"
              onChange={(e) => setCommentInput(e.target.value)}
              variant="outlined"
            />

            <Button color="secondary" onClick={AddUser} variant="outlined">
              Add Comment
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
