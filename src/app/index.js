import React from "react";
import AddModal from "../components/AddModal";
import "app/App.css";
import CommentSection from "components/CommentSection";
import { mockComments } from "../store/api";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TopComments from "../components/TopComments";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function App() {
  const [comments, setComments] = React.useState(mockComments);
  const [showModal, setShowModal] = React.useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <CommentSection comments={comments} setShowModal={setShowModal} />
            </Grid>
            <Grid item xs={6}>
              <TopComments comments={comments} />
            </Grid>
          </Grid>
        </Box>
        {showModal === true ? (
          <AddModal
            showModal={showModal}
            setComments={setComments}
            comments={comments}
            setShowModal={setShowModal}
          />
        ) : null}
      </ThemeProvider>
    </div>
  );
}

export default App;
