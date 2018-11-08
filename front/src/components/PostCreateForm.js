import React, { Fragment, Component } from 'react';
import { Mutation } from "react-apollo";
import { CREATE_POST } from '../graphql/mutations/posts';
import history from '../history';

class PostCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: ''
    };
  }

  updateState = (event, key) => {
    event.preventDefault();
    this.setState({
      [key]: event.target.value,
    });
  };

  submitPost = e => {
    e.preventDefault();
  }

  render() {
    const { title, content, author } = this.state;
    return (
      <Mutation mutation={CREATE_POST} onCompleted={() => history.goBack()}>
        {createPost => (
          <Fragment>
            <div className="posts-container">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createPost({ variables: this.state });
                }}
              >
                <h1> Create Post</h1>
                <div className='form-container'>
                  <div>
                    <input
                      type='text'
                      placeholder='Author'
                      onChange={event => this.updateState(event, 'author')}
                      value={author}
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      placeholder='Title'
                      onChange={event => this.updateState(event, 'title')}
                      value={title}
                    />
                  </div>
                  <div>
                    <textarea
                      type='text'
                      placeholder='Write the content...'
                      onChange={event => this.updateState(event, 'content')}
                      value={content}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='custom-button'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Fragment>
        )}
      </Mutation>
    );
  }
}

export default PostCreateForm;
