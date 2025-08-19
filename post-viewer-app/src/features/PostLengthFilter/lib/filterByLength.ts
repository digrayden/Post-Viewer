import type { Post } from "../../../widgets/PostList/model/types"

export const filterByLength = (
  posts: Post[],
  minLength: number
) => {
  return posts.filter(post => post.title.length >= minLength);
};