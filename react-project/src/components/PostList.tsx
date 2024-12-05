import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

function PostList({ isPosting, onStopPosting }: PostListProps) {
  const [posts, setPosts] = useState<{ body: string; author: string }[]>([]);

  function addPostHandler(postData: { body: string; author: string }) {
    setPosts((existPosts) => [...existPosts, postData]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
      <ul className={classes.post}>
        {posts.map((post) => (
          <Post key={post.author} name={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
