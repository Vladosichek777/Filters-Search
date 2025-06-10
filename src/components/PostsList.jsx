import Stack from "@mui/material/Stack";
import Post from "./Post";

export default function PostsList({ listPosts, deletePost }) {
  return (
    <Stack sx={{ paddingTop: "8vh", width: "70%" }} spacing={3}>
      {listPosts.map((post) => {
        return <Post title={post.title} body={post.body} key={post.id} deletePost={deletePost} id={post.id} />;
      })}
    </Stack>
  );
}
