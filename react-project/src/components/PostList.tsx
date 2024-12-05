import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        enteredBody={enteredBody}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.post}>
        <Post name={enteredAuthor} body={enteredBody} />
        <Post name="John" body="Hello, world!" />
      </ul>
    </>
  );
}

export default PostList;
