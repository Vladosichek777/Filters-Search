import "./App.css";
import AddPostForm from "./components/AddPostForm";
import Container from "@mui/material/Container";
import Filters from "./components/Filters";
import PostsList from "./components/PostsList";
import Button from "@mui/material/Button";
import SkeletonPost from "./components/SkeletonPost";

import { v4 as uuidv4 } from "uuid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

function App() {
  const [listPosts, setListPosts] = useState([]);
  const [copyListPosts, setCopyListPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const createNewPost = (title, body) => {
    setListPosts([...listPosts, { title, body, id: uuidv4() }]);
    setCopyListPosts([...copyListPosts, { title, body, id: uuidv4() }]);
  };
  const handleDeletePost = (index) => {
    setListPosts(listPosts.filter((post) => post.id !== index));
    setCopyListPosts(copyListPosts.filter((post) => post.id !== index));
  };
  const handleGetPosts = () => {
    setIsLoading(true);
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
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("Ошибка загрузки постов");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { sm: "20vh", xs: "5vh" },
        paddingBottom: "10vh",
        bgcolor: "#e0e2e4",
        minHeight: "80vh",
        boxShadow: "0px 0px 9px 0px",
        borderRadius: "10px",
      }}
    >
      <AddPostForm newPost={createNewPost} />
      <Filters setListPosts={setListPosts} copyListPosts={copyListPosts} setSearchTerm={setSearchTerm} />
      <Button sx={{ marginLeft: "auto", marginTop: "30px" }} variant="outlined" onClick={handleGetPosts} disabled={isLoading}>
        {" "}
        Get Posts
      </Button>
      {isLoading && (
        <>
          <CircularProgress size={80} />
          <SkeletonPost />
        </>
      )}
      {listPosts.length > 0 ? (
        <div>
          <Button
            sx={{ marginBottom: "10px" }}
            variant="contained"
            color="error"
            size="small"
            onClick={() => {
              setListPosts([]);
              setCopyListPosts([]);
            }}
          >
            Clear posts list
          </Button>
          <PostsList listPosts={listPosts} deletePost={handleDeletePost} searchTerm={searchTerm} />
        </div>
      ) : (
        <Typography
          sx={{
            fontSize: {
              xs: "1.25rem",
              sm: "2rem",
            },
            fontWeight: "bold",
          }}
          gutterBottom
        >
          Add your first post :)
        </Typography>
      )}
    </Container>
  );
}

export default App;
