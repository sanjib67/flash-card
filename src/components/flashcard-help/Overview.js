import React, { Component } from "react";
import graphOverview2 from "../../images/graph-overview-2.png";

export default class Overview extends Component {
  render() {
    return (
      <div className="content">
        <h1>Overview</h1>
        <img alt="" src={graphOverview2} />
        <ol>
          <li>
            <strong>
              <u>Header</u>:
            </strong>{" "}
            User can see the selected key parameters and latest time period
            here.
          </li>
          <li>Application version information.</li>
        </ol>
      </div>
    );
  }
}
