import React, { Fragment, Component } from 'react';

import { Mutation } from "react-apollo";
import { UPDATE_POST } from '../graphql/mutations/posts'
import history from '../history';

class PostEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
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
      <Mutation mutation={UPDATE_POST} onCompleted={() => history.goBack()}>
        {updatePost => (
           <Fragment>
           <div className="posts-container">
             <form
             onSubmit={e => {
               e.preventDefault();
               updatePost({ variables: this.state });
             }}
             >
               <h1> Edit Post</h1>
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
                    placeholder='Write content...'
                    onChange={event => this.updateState(event, 'content')}
                    value={content}
                   />
                 </div>
               </div>
               <div>
                 <button
                   className="custom-button"
                   type = 'submit'
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

export default PostEditForm;
