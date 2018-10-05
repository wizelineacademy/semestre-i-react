import React from 'react';
import TopBar from "./TopBar";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import About from "./About";
import Posts from "./Posts";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <TopBar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Redirect to="about"/>
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}


export default App;
