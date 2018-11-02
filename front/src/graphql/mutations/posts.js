import { gql } from 'apollo-boost';

const CREATE_POST = gql`
  mutation createPost($author: String!, $title: String, $content: String) {
    createPost(input: { author: $author, title: $title, content: $content }) {
      author
      title
      content
    }
  }
`;

// eslint-disable-next-line
export { CREATE_POST };
