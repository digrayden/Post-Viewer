import type { Post } from "../../../entities/post/model/types"

export const filterByLength = (
  posts: Post[],
  minLength: number
) => {
  return posts.filter(post => post.title.length >= minLength);
};