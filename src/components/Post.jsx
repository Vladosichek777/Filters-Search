import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Post({ title, body, deletePost, id }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ padding: "10px 30px" }} variant="elevation" elevation={5}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography sx={{ textDecoration: "underline" }} variant="subtitle1" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {body}
            </Typography>
          </Box>
          <IconButton onClick={() => deletePost(id)} aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      </Paper>
    </Box>
  );
}
