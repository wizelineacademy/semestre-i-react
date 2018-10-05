import { COMMENTS, POSTS, STEPS } from "./constants";

const delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

export const getSteps = async () => {
  await delay(2000);
  return STEPS;
};

export const getPosts = async () => {
  await delay(2000);
  return POSTS;
};

export const getPostComments = async (postId) => {
  await delay(2000);
  switch(postId) {
    case 1:
      return COMMENTS.slice(0, 2);
    case 2:
      return COMMENTS.slice(2, 4);
    case 3:
      return COMMENTS.slice(4, 6);
    default:
      return [];
  }
};
