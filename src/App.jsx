import "./App.css";
import AddPost from "./components/AddPost";
import Container from "@mui/material/Container";
import Filters from "./components/Filters";
import PostsList from "./components/PostsList";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";

function App() {
  const [listPosts, setListPosts] = useState([]);
  const [copyListPosts, setCopyListPosts] = useState([]);

  const createNewPost = (title, body) => {
    setListPosts([...listPosts, { title, body, id: uuidv4() }]);
    setCopyListPosts([...copyListPosts, { title, body, id: uuidv4() }]);
  };
  const handleDeletePost = (index) => {
    setListPosts(listPosts.filter((post) => post.id !== index));
    setCopyListPosts(copyListPosts.filter((post) => post.id !== index));
  };
  const handleGetPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const newPosts = posts.map((post) => ({
          title: post.title,
          body: post.body,
          id: uuidv4(),
        }));
        setListPosts((prev) => [...prev, ...newPosts]);
        setCopyListPosts((prev) => [...prev, ...newPosts]);
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20vh",
        paddingBottom: "10vh",
        bgcolor: "#e0e2e4",
        minHeight: "80vh",
        boxShadow: "0px 0px 9px 0px",
        borderRadius: "10px",
      }}
    >
      <AddPost newPost={createNewPost} />
      <Filters setListPosts={setListPosts} copyListPosts={copyListPosts} />
      <Button sx={{ marginLeft: "auto", marginTop: "30px" }} variant="outlined" onClick={handleGetPosts}>
        {" "}
        Get Posts
      </Button>
      {listPosts.length > 0 && <PostsList listPosts={listPosts} deletePost={handleDeletePost} />}
    </Container>
  );
}

export default App;
