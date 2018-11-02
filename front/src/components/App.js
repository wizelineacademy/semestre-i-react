import React from 'react';
import TopBar from "./TopBar";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Posts from "./Posts";
import PostCreateForm from "./PostCreateForm";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopBar />
          <Switch>
            <Route path="/posts" component={() => <Posts />} />
            <Route path="/addPost" component={() => <PostCreateForm />} />
            <Route path="/editPost" component={() => <PostCreateForm />} />
            <Redirect to="posts"/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}


export default App;
