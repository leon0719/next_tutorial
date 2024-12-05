import classes from "./Post.module.css";

interface PostProps {
  // 命名使用 ComponentName + Props 的慣例
  name: string;
  body: string;
}

function Post(props: PostProps) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.name}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;
