import React, { Fragment } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

const Post = props => {
    const { post } = props;

    return (
        <Fragment>
            <Card>
            <Fragment>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <h5>by {post.author}</h5>
                <Link to={{ pathname: `/editPost/${post._id}` }}>
                    <button className="custom-button">
                        Edit
                    </button>
                </Link>
            </Fragment>
            </Card>
        </Fragment>
    )
};

export default Post
