import * as React from 'react'
import { Link } from "react-router-dom";

class TopBar extends React.PureComponent {
  render() {
    return (
      <div className="topbar">
        <a href="https://academy.wizeline.com/" target="_blank">
          <img src="https://wizeline-academy-assets-production.s3.amazonaws.com/wp-content/themes/wizeline-academy/dist/images/academy-logo.svg" />
        </a>
        <Link to="/about" className="link">
          ABOUT
        </Link>
        <Link to="/posts" className="link">
          POSTS
        </Link>
      </div>
    )
  }
}

export default TopBar;
