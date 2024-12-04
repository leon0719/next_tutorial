interface PostProps {  // 命名使用 ComponentName + Props 的慣例
  name: string;
}

function Post(props: PostProps) {
  return (
    <div>
      <p>React.js is awesome! {props.name}</p>
    </div>
  );
}

export default Post;