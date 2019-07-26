import React, { Component } from "react";
import classes from "./Layout.module.css";
import MenuToggle from "../../component/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../component/Navigation/Drawer/Drawer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }

  toggleMenuHendler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };
  render() {
    return (
      <div className={classes.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.toggleMenuHendler} />

        <MenuToggle
          onToggle={this.toggleMenuHendler}
          isOpen={this.state.menu}
        />
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
