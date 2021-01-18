import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import GenmedData from "../../../data/BUspecificSection/GenmedInformation.json";

export default class GenmedInformation extends Component {
  state = {
    data: GenmedData,
    tableColumns: [
      {
        name: "Category",
        width: 300,
      },
      {
        name:  "Sub-Category",
        width: 300,
      },
      {
        name: "Definition",
        width: 300,
      },
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Genmed Information</h1>
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
