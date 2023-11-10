import React, { Component } from 'react'
import { Link } from 'react-router-dom';


 class Header2 extends Component {
  render() {
    return (
    <li className = "nav-item">
      <Link className = "nav-link js-scroll-trigger" to= {this.props.linkUrl}>
        {this.props.linkName}
      </Link>

    </li>
    );
  }
}

export default Header2;