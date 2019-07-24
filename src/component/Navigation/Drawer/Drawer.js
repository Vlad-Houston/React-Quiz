import React, { Component } from "react";
import classes from "./Drawer.module.css";

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((links, index) => {
      return (
        <li key={index}>
          <a>Link {links}</a>
        </li>
      );
    });
  }
  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }
    return (
      <nav className={cls.join(" ")}>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}

export default Drawer;
