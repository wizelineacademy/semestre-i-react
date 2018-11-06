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
  mutation updatePost($_id: ID!, $author: String!, $title: String, $content: String) {
    updatePost(_id: $_id, input: { author: $author, title: $title, content: $content }) {
      _id
      author
      title
      content
    }
  }
`;

export { CREATE_POST, UPDATE_POST };
// export { UPDATE_POST };
