import { gql } from 'apollo-boost';

const GET_POSTS = gql`
{
	posts {
    _id
    title
    content
    author
  }
}
`;
// eslint-disable-next-line
export { GET_POSTS };
