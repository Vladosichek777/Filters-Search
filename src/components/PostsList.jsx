import Stack from "@mui/material/Stack";
// import Post from "./Post";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FixedSizeList as List } from "react-window";

export default function PostsList({ listPosts, deletePost }) {
  function Post({ index, style }) {
    return (
      <Box style={style}>
        <Paper sx={{ padding: "10px 30px" }} variant="elevation" elevation={5}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography sx={{ textDecoration: "underline" }} variant="subtitle1" gutterBottom>
                {listPosts[index].title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {listPosts[index].body}
              </Typography>
            </Box>
            <IconButton onClick={() => deletePost(listPosts[index].id)} aria-label="delete">
              <DeleteIcon color="error" />
            </IconButton>
          </Stack>
        </Paper>
      </Box>
    );
  }

  return (
    <List sx={{ marginTop: "8vh" }} height={400} itemCount={listPosts.length} itemSize={150} width={"70%"}>
      {Post}
    </List>
  );
}
