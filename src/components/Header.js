import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="nav_bar">
        <a href="#" className={"icon icon-left-nav pull-left" + (this.props.returnButton === true ? "" : " hidden")}/>
        <h1>{this.props.text}</h1>
      </header>
    );
  }
}

export default Header