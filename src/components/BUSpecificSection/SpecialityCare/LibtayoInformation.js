import React, { Component } from "react";
import RsuiteTable from "../../../lib/RsuiteTable";
import LibtayoInfoData from "../../../data/BUspecificSection/Libtayoinfo.json";

export default class LibtayoInformation extends Component {
  state = {
    data: LibtayoInfoData,
    tableColumns: [
      {
        name: "Category",
        width: 150,
      },
      {
        name: "Parameter",
        width: 300,
      },
      {
        name: "Details",
        width: 300,
      }
    ],
  };

  render() {
    return (
      <div className="content col">
        
        <br></br>
        <h1>Libtayo Information</h1>
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
