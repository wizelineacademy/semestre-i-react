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
        <div className="posts-container">
          <h1>Posts</h1>
          {data.posts.map((post, key) => (
            <Post post={post} key={key} />
          ))}
        </div>
      );
    }}
  </Query>
);

export default Posts;
