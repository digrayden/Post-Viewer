import PostCard from "../../entities/post/ui/PostCard";

const somePosts = [
  {id: 1, title: 'First post', body: 'This is the first post.'},
  {id: 2, title: 'Second post', body: 'This is the second post.'},
  {id: 3, title: 'Third post', body: 'This is the third post.'},
];

const PostList = () => {
  return (
    <div>
      {somePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList