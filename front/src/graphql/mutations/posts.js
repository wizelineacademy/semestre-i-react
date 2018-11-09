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

const UPDATE_POST = gql`
  mutation updatePost($id: ID, $author: String!, $title: String, $content: String) {
    updatePost(_id: $id,input: { author: $author, title: $title, content: $content }) {
      author
      title
      content
    }
  }
`;

// eslint-disable-next-line
export { CREATE_POST };
export { UPDATE_POST };
