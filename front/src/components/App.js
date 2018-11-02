import React from 'react';
import TopBar from "./TopBar";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Posts from "./Posts";
import PostCreateForm from "./PostCreateForm";
import PostEditForm from './PostEditForm';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopBar />
          <Switch>
            <Route path="/posts" component={() => <Posts />} />
            <Route path="/addPost" component={props => <PostCreateForm {...props} />} />
            <Route path="/editPost/:id" component={props => <PostEditForm {...props} />} />
            <Redirect to="posts"/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}


export default App;
