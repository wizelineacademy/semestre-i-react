import React from 'react';
import TopBar from "./TopBar";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Posts from "./Posts";
import PostForm from "./PostForm";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopBar />
          <Switch>
            <Route path="/posts" component={() => <Posts />} />
            <Route path="/addPost" component={() => <PostForm title='Create' />} />
            <Route path="/editPost" component={() => <PostForm title='Edit' />} />
            <Redirect to="posts"/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}


export default App;
