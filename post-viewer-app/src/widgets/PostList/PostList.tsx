import PostCard from "../../entities/post/ui/PostCard";

const somePosts = [
  {id: 1, title: 'First post', body: 'Aliqua adipisicing quis laboris excepteur voluptate magna aliquip officia est occaecat anim nulla. Fugiat consequat in sint non ipsum nulla laboris deserunt fugiat. Ex amet enim ipsum aliqua. Aliqua nisi aute aliqua sint do adipisicing nisi reprehenderit eu commodo aliquip aliqua. Ut velit cillum mollit voluptate velit enim exercitation ea laboris in.'},
  {id: 2, title: 'Second post', body: 'Aliqua adipisicing quis laboris excepteur voluptate magna aliquip officia est occaecat anim nulla. Fugiat consequat in sint non ipsum nulla laboris deserunt fugiat. Ex amet enim ipsum aliqua. Aliqua nisi aute aliqua sint do adipisicing nisi reprehenderit eu commodo aliquip aliqua. Ut velit cillum mollit voluptate velit enim exercitation ea laboris in.'},
  {id: 3, title: 'Third post', body: 'Aliqua adipisicing quis laboris excepteur voluptate magna aliquip officia est occaecat anim nulla. Fugiat consequat in sint non ipsum nulla laboris deserunt fugiat. Ex amet enim ipsum aliqua. Aliqua nisi aute aliqua sint do adipisicing nisi reprehenderit eu commodo aliquip aliqua. Ut velit cillum mollit voluptate velit enim exercitation ea laboris in.'},
];

const PostList = () => {
  return (
    <div className="post-list">
      <h2 className="post-list_title">Post List</h2>
      {somePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList