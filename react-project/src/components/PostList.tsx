import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
    <NewPost />
    <ul className={classes.post}>
      <Post name="John" />
      <Post name="Jane" />
    </ul>
    </>
  );
}

export default PostList;
