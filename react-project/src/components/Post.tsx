import classes from "./Post.module.css";

interface PostProps {
  // 命名使用 ComponentName + Props 的慣例
  name: string;
}

function Post(props: PostProps) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.name}</p>
      <p className={classes.text}>React.js is awesome! {props.name}</p>
    </li>
  );
}

export default Post;
