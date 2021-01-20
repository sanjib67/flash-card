import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import AsiaData from "../../../data/BUspecificSection/AsiaScorecard.json";

export default class AsiaScorecard extends Component {
  state = {
    data: AsiaData,
    tableColumns: [
      {
        name: "Country",
        width: 200,
      },
      {
        name: "Market sales",
        width: 200,
      },
      {
        name: "Finance: Internal Sales",
        width: 200,
      },
      {
        name: "Panels",
        width: 200,
      },
    ],
  };

  render() {
    return (
      <div className="content col">
        <br></br>
        <h1>Asia Scorecard</h1>
        <RsuiteTable
          wordWrap={true}
          virtualized={true}
          data={this.state.data}
          tableColumns={this.state.tableColumns}
        />
      </div>
    );
  }
}
