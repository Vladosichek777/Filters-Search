import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Virtuoso } from "react-virtuoso";

import { highlightText } from "../utils.jsx/highlightText";

export default function PostsList({ listPosts, deletePost, searchTerm }) {
  return (
    <Box sx={{ height: { xs: "50vh", sm: "70vh" }, width: "70vw" }}>
      <Virtuoso
        style={{ height: "100%", width: "100%" }}
        data={listPosts}
        itemContent={(_, post) => (
          <Box>
            <Paper sx={{ padding: { sm: "10px 30px", xs: "10px" }, marginBottom: "20px" }} variant="elevation" elevation={5}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography sx={{ textDecoration: "underline" }} variant="subtitle1" gutterBottom>
                    {highlightText(post.title, searchTerm)}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {highlightText(post.body, searchTerm)}
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
    </Box>
  );
}
