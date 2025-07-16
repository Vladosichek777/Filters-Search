import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function AddPostForm({ newPost }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const handleAddNewPost = (e) => {
    e.preventDefault();
    newPost(post.title, post.body);
    setPost({ title: "", body: "" });
  };

  return (
    <form action="submit" onSubmit={handleAddNewPost}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", width: "40vw", borderRadius: "10px", padding: "30px", backgroundColor: "white", gap: "30px" }}>
        <Input
          placeholder="Title"
          required
          type="string"
          sx={{
            width: "50%",
          }}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
        />
        <TextField onChange={(e) => setPost({ ...post, body: e.target.value })} value={post.body} required multiline placeholder="Text" />
        <Button type="submit" variant="contained" size="large" sx={{ width: "15%" }}>
          POST
        </Button>
      </Box>
    </form>
  );
}
