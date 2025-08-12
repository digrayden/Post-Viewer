export const filterByLength = (
  posts: { id: number; title: string; body: string }[],
  minLength: number
) => {
  return posts.filter(post => post.title.length >= minLength);
};