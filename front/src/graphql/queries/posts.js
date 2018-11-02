import { gql } from 'apollo-boost';

const GET_POSTS = gql`
{
	posts {
    title
    content
    author
  }
}
`;
// eslint-disable-next-line
export { GET_POSTS };
