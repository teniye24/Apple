import React, { Component } from "react";

class Footerlink extends Component {
  render() {
    let { linkTitle, linkName } = this.props;
    // console.log(linkName);
    return (
      <>
        <h3 class="toggle">{linkTitle}</h3>
        <ul>
          {linkName.map((item, i) => (
            <li key={i}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Footerlink;
