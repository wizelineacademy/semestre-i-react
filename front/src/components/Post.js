import React, { Fragment, Component } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { getPostComments } from '../utils/webServices'

class Post extends Component {
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
            <Fragment>
                <Card>
                <Fragment>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <h5>by {post.user}</h5>
                    <Link to="/editPost">
                        <button
                            className="custom-button"
                            onClick={() => this.loadComments(post.id)}
                        >
                            Edit
                        </button>
                    </Link>
                    <button
                        className="custom-button right"
                        onClick={() => this.loadComments(post.id)}
                    >
                        Comments
                    </button>
                    <div className="comments-container">
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
                </Fragment>
                </Card>
            </Fragment>
        )
    }
}

export default Post