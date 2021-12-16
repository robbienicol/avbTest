import React from "react";
import { Divider, Grid, Paper, Button } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import "./CommentSection.css";

const CommentSection = ({ setShowModal, comments }) => {
  //reversed so i can show the newest comments first
  const Comments = comments.reverse().map((e) => {
    return (
      <Paper className="paper">
        <Divider />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid className="comments" justifyContent="left">
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
      <div className="header">
        <h1>Comments</h1>
        <Button
          onClick={() => setShowModal(true)}
          color="primary"
          variant="outlined"
        >
          Add Comment
        </Button>
      </div>
      {Comments}
    </div>
  );
};

export default CommentSection;
