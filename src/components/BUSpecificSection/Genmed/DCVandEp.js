import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import DcvData from "../../../data/BUspecificSection/DcvandEp.json";

export default class DCVandEp extends Component {
  state = {
    data: DcvData,
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
        <h1>DCV and EP Market</h1>
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
