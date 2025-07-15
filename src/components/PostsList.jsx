import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Virtuoso } from "react-virtuoso";

export default function PostsList({ listPosts, deletePost }) {
  return (
    <Virtuoso
      style={{ height: "80vh", width: "70%" }}
      data={listPosts}
      itemContent={(_, post) => (
        <Box>
          <Paper sx={{ padding: "10px 30px", marginBottom: "20px" }} variant="elevation" elevation={5}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography sx={{ textDecoration: "underline" }} variant="subtitle1" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {post.body}
                </Typography>
              </Box>
              <IconButton onClick={() => deletePost(post.id)} aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
            </Stack>
          </Paper>
        </Box>
      )}
    />
  );
}
