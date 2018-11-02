import React, { Fragment } from 'react';
import { GET_POSTS } from '../graphql/queries/posts'
import { Query } from 'react-apollo';
import Post from './Post';

const Posts = () => (
  <Query query={GET_POSTS} policy="network-only">
    {({ loading, error, data }) => {
      if (loading) {
        return <h3>Loading posts...</h3>;
      }
      if (error) return `Error! ${error.message}`;
      return (
        <Fragment>
          {data.posts.map((post, key) => (
            <Post post={post} key={key} />
          ))}
        </Fragment>
      );
    }}
  </Query>
);

export default Posts;
