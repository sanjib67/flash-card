import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import ChcMarketData from "../../../data/BUspecificSection/ChcMarket.json";

export default class ChcMarket extends Component {
  state = {
    data: ChcMarketData,
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
      },
      {
        name: "SISO",
        width: 150,
      },
    ],
  };

  render() {
    return (
      <>
        <br></br>
        <h1>CHC Market</h1>
        <div className="content">
         
          <RsuiteTable
            wordWrap={true}
            virtualized={true}
            data={this.state.data}
            tableColumns={this.state.tableColumns}
          />
        </div>
      </>
    );
  }
}
