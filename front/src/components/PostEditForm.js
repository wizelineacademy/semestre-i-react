import React, { Fragment, Component } from 'react';
// import history from '../history';

class PostEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: ''
    };
  }

  submitPost = e => {
    e.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div className="posts-container">
          <form>
            <h1> Edit Post</h1>
            <div className='form-container'>
              <div>
                <input
                  type='text'
                  placeholder='Author'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Title'
                />
              </div>
              <div>
                <textarea
                  type='text'
                  placeholder='Write the content...'
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

export default PostEditForm;
