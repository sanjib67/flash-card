import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import TotalEpData from "../../../data/BUspecificSection/TotalEp.json";

export default class TotalEp extends Component {
  state = {
    data: TotalEpData,
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
        name: "Panels",
        width: 200,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Total EP</h1>
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
