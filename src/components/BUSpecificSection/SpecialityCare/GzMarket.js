import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import GzData from "../../../data/BUspecificSection/Gzmarket.json";

export default class GzMarket extends Component {
  state = {
    data:GzData,
    tableColumns: [
      {
        name: "Country",
        width: 150,
      },
      {
        name: "Market sales",
        width: 150,
      },
      {
        name: "Panels",
        width: 150,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Gz Market</h1>
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
