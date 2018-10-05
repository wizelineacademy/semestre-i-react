import * as React from 'react'
import Card from './Card'
import { getPostComments } from '../utils/webServices'

class Post extends React.PureComponent {
    state = { 
        loading: false,
        comments: []
    }

    loadComments = async (postID) => {
        this.setState({ loading: true })
        const comments = await getPostComments(postID)
        this.setState({ comments, loading: false})
    }

    render() {
        const { comments, loading } = this.state
        const { post } = this.props


        return (
            <React.Fragment>
                <Card
                    children={
                        <React.Fragment>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <h5>by {post.user}</h5>
                            <div className="comments-container">
                                <button 
                                    className="custom-button"
                                    onClick={() => this.loadComments(post.id)}
                                >
                                    Comments
                                </button>
                                {loading
                                  ? (
                                    <h5 className="load-comments">Loading comments...</h5>
                                  )
                                  : comments.map((comment, key) => (
                                    <Card
                                        children={comment}
                                        key={key}
                                    />
                                  ))
                                }
                            </div>
                        </React.Fragment>
                    }
                />
            </React.Fragment>
        )
    }
}

export default Post