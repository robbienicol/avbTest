import React from "react";
import { Divider, Grid, Paper, Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";

const CommentSection = ({ setShowModal, comments }) => {
  const Comments = comments.reverse().map((e) => {
    return (
      <Paper style={{ padding: "50px 20px 0 10px" }}>
        <Divider style={{ margin: "30px 0" }} />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left">
            <Avatar>{e.name.charAt(0)}</Avatar>
            <h4>{e.name}</h4>
            <p>{e.comment}</p>
          </Grid>
        </Grid>
      </Paper>
    );
  });
  return (
    <div>
      <h1>Comments</h1>
      <Button
        onClick={() => setShowModal(true)}
        color="primary"
        variant="outlined"
      >
        Add Comment
      </Button>
      {Comments}
    </div>
  );
};

export default CommentSection;
