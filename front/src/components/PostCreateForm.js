import React, { Fragment, Component } from 'react';
// import history from '../history';

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
      <Fragment>
        <div className="posts-container">
          <form>
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
                className="custom-button"
                onSubmit={() => this.submitPost()}
              >
                  Submit
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default PostCreateForm;
