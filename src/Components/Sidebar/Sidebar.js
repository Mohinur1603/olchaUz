import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`sidebar p-3 ${this.props.hide && "hide"}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ color: "crimson" }}>menu</h1>
          <button className="btnX" onClick={() => this.props.changeHide(true)}>
            x
          </button>
        </div>
        <div>
          <p className="mt-5">This is a menu</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
