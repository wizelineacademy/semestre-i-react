import * as React from 'react'
import { getPosts } from '../utils/webServices'
import Post from './Post';

class Posts extends React.PureComponent {
  state = {
    posts: [],
    loading: false,
  }

  componentDidMount = async () => {
    this.setState({ loading: true })
    const posts = await getPosts();
    this.setState({ posts, loading: false})
  }

  render() {
    const { posts, loading } = this.state

    return (
      <div className="posts-container">
        <h1>Posts</h1>
        {loading
          ? (
            <h3>Loading posts...</h3>
          )
          : posts.map((post, key) => (
            <Post
              post={post}
              key={key}
            />
          ))

        }
      </div>
    )
  }
}

export default Posts;
